import React from "react";
import { Skeleton } from "@mui/material";
import { Container } from "@mui/system";

// função p indicar q a página está sendo carregada ...
export const Skeletons = () => {
  // estilização de blocos
  return (
    <Container maxWidth="xxl">
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
    </Container>
  );
};
