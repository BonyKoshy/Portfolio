import { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RotateCw } from "lucide-react";
import { PrimaryButton } from "@/shared/ui/Button";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
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

            {/* Optional: Show error message in development only, or if you prefer generic */}
            {process.env.NODE_ENV === "development" && this.state.error && (
              <pre className="mt-4 p-4 bg-black/5 dark:bg-white/5 rounded-lg text-xs text-left overflow-auto w-full max-h-32 font-mono text-red-400">
                {this.state.error.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
