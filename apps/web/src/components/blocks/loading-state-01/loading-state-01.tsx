import { VStack, HStack } from "@blenx-dev/ui/components/Stack/stack";
import { Progress } from "@blenx-dev/ui/components/Progress/progress";
import {
  skeletonShimmer,
  skeletonTextLine,
  skeletonCardSkeleton,
  skeletonTableHeader,
  skeletonTableRow,
  skeletonAvatar,
  skeletonAvatarTextGroup,
  skeletonContainer,
  skeletonProgressWrapper,
} from "./loading-state-01.styles";

type SkeletonPattern = "text" | "card" | "table" | "avatar" | "custom";

type Props = {
  pattern?: SkeletonPattern;
  lines?: number;
  rows?: number;
  showProgress?: boolean;
  label?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

function SkeletonBar({ style }: { style?: React.CSSProperties }) {
  return (
    <div aria-hidden="true" className={`${skeletonTextLine} ${skeletonShimmer}`} style={style} />
  );
}

function TextPattern({ lines = 3 }: { lines?: number }) {
  return (
    <VStack gap="small">
      {Array.from({ length: lines }, (_, i) => (
        <SkeletonBar key={i} style={i === lines - 1 ? { width: "60%" } : undefined} />
      ))}
    </VStack>
  );
}

function CardPattern() {
  return <div className={`${skeletonCardSkeleton} ${skeletonShimmer}`} aria-hidden="true" />;
}

function TablePattern({ rows = 4 }: { rows?: number }) {
  return (
    <VStack gap="xsmall">
      <div className={`${skeletonTableHeader} ${skeletonShimmer}`} aria-hidden="true" />
      {Array.from({ length: rows }, (_, i) => (
        <div key={i} className={`${skeletonTableRow} ${skeletonShimmer}`} aria-hidden="true" />
      ))}
    </VStack>
  );
}

function AvatarPattern() {
  return (
    <HStack gap="medium" align="center">
      <div className={`${skeletonAvatar} ${skeletonShimmer}`} aria-hidden="true" />
      <div className={skeletonAvatarTextGroup}>
        <SkeletonBar />
        <SkeletonBar />
      </div>
    </HStack>
  );
}

export function LoadingState01({
  pattern = "text",
  lines,
  rows,
  showProgress,
  label = "Loading content",
  children,
  style,
}: Props) {
  return (
    <output aria-busy="true" aria-label={label} className={skeletonContainer} style={style}>
      {pattern === "text" && <TextPattern lines={lines} />}
      {pattern === "card" && <CardPattern />}
      {pattern === "table" && <TablePattern rows={rows} />}
      {pattern === "avatar" && <AvatarPattern />}
      {pattern === "custom" && children}

      {showProgress && (
        <div className={skeletonProgressWrapper}>
          <Progress value={null} />
        </div>
      )}
    </output>
  );
}
