import styled from "styled-components";
import tw from "twin.macro";

const FigureArea = styled.main.attrs({
  className: "md:flex w-1/2 mx-auto my-20 bg-purple-500 rounded-xl p-8 md:p-0",
})`
  & {
    img {
      ${tw`w-48 h-full object-cover md:w-48 md:h-auto md:rounded-DEFAULT rounded-full mx-auto`}
    }
    .card-body {
      ${tw`pt-6 md:p-8 text-center md:text-left space-y-4`}
    }
    .title-card {
      ${tw`text-lg font-semibold text-white`}
    }
  }
`;

const Caption = styled.div.attrs({
  className: "font-medium",
})`
  & {
    .name-card {
      ${tw`text-pink-700`}
    }
    .desc-card {
      ${tw`text-gray-700`}
    }
  }
`;

export { FigureArea, Caption };
