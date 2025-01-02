type UnknowType = any; // eslint-disable-line

type PropsWithClassName<T = unknown> = T & {
  className?: string;
};
