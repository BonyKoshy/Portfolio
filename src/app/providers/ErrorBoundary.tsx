import { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RotateCw } from "lucide-react";
import { PrimaryButton } from "@/shared/ui/Button";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

/** Catches JS errors anywhere in the child component tree and displays a fallback UI. */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  private handleReload = () => {
    window.location.reload();
  };

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-bg-default text-text-primary text-center">
          <div className="bg-bg-paper border border-border-default rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-2">
              <AlertCircle size={32} />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Something went wrong</h1>
              <p className="text-text-secondary">
                An unexpected error occurred. Our team has been notified.
              </p>
            </div>

            <PrimaryButton
              onClick={this.handleReload}
              className="w-full justify-center"
            >
              <RotateCw size={18} className="mr-2" />
              Reload Page
            </PrimaryButton>

            {import.meta.env.DEV && this.state.error && (
              <details className="whitespace-pre-wrap text-sm font-mono bg-red-950/30 p-4 rounded text-red-200 overflow-auto max-h-64">
                {this.state.error.toString()}
                <br />
                {this.state.errorInfo?.componentStack}
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
