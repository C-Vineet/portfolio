export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-muted animate-spin" style={{ borderTopColor: 'transparent' }} />
        <div className="absolute inset-2 border-4 border-muted-foreground animate-spin" style={{ borderBottomColor: 'transparent', animationDirection: 'reverse', animationDuration: '1s' }} />
      </div>
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        <LoadingSpinner />
        <p className="text-muted-foreground animate-pulse" style={{ fontSize: '0.938rem' }}>
          Loading...
        </p>
      </div>
    </div>
  );
}
