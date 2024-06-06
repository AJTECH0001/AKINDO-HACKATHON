"use client";

import { Button, Img, Line, List, Text } from "../components";

const Home = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-gradient1  flex flex-col items-center justify-start p-[9px] w-full">
          <div className="flex gap-10   items-center justify-between max-w-[1197px] mt-[100px] mx-auto  w-full">
            <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start w-[41%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text className="leading-[120.00%]  text-[50px] text-white-A700 w-full" size="txtPoppinsBold50">
                  Create, Sell & Collect Your Own Creative NFT
                </Text>
                <Text className="leading-[180.00%] mt-2.5 text-white-A700_7f text-xl w-full" size="txtPoppinsMedium20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.
                </Text>
                <div className="flex flex-row gap-5 items-center justify-start mt-[30px] w-[61%] ">
                  <Button className="cursor-pointer font-medium leading-[normal] bg-purple-500 min-w-[161px] text-center text-xl">
                    Explore Now
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[117px] text-center text-xl"
                    color="white_A700_19"
                    variant="fill"
                  >
                    Sell NFT
                  </Button>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text className="text-3xl  text-white-A700" size="txtPoppinsBold30">
                    37k+
                  </Text>
                  <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                    Artworks
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text className="text-3xl  text-white-A700" size="txtPoppinsBold30">
                    20k+
                  </Text>
                  <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                    Artists
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Text className="text-3xl  text-white-A700" size="txtPoppinsBold30">
                    99k+
                  </Text>
                  <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                    Aucation
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex  flex-col items-center justify-start w-1/2 ">
              <div className="flex  flex-row gap-[15px] items-center justify-between w-full">
                <List className=" flex-row gap-[15px] grid grid-cols-2" orientation="horizontal">
                  <div className="flex flex-col gap-[15px] items-center justify-start sm:ml-[0] w-full">
                    <Img
                      className="h-[140px]  object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                      src="images/img_rectangle15.png"
                      alt="rectangleFifteen"
                    />
                    <Img
                      className="h-[220px]  object-cover rounded-[10px] w-full"
                      src="images/img_rectangle17.png"
                      alt="rectangleSeventeen"
                    />
                    <Img
                      className="h-[127px]  object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                      src="images/img_rectangle18.png"
                      alt="rectangleEighteen"
                    />
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start sm:ml-[0] w-full">
                    <Img
                      className="h-[108px]  object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                      src="images/img_rectangle16.png"
                      alt="rectangleSixteen"
                    />
                    <Img
                      className="h-[220px]  object-cover rounded-[10px] w-full"
                      src="images/img_rectangle19.png"
                      alt="rectangleNineteen"
                    />
                    <Img
                      className="h-[159px]  object-cover rounded-[10px] w-[96%]"
                      src="images/img_rectangle20.png"
                      alt="rectangleTwenty"
                    />
                  </div>
                </List>
                <Img
                  className="h-[412px]  object-cover rounded-[10px]"
                  src="images/img_rectangle21.png"
                  alt="rectangleTwentyOne"
                />
              </div>
            </div>
          </div>
          <div className="flex  flex-row  items-center justify-between max-w-[1196px] mt-[150px] mx-auto  w-full">
            <Img className="h-[60px]" src="images/img_binancelogologo.svg" alt="binancelogologo" />
            <Img className="h-[60px]" src="images/img_ethereumlogo.svg" alt="ethereumlogo" />
            <Img className="h-[60px]" src="images/img_binancelogologo.svg" alt="logoofblockchai" />
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1197px] mt-[148px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700" size="txtRobotoBold40">
                About Us
              </Text>
              <Text
                className="mt-[11px] text-center text-white-A700_7f text-xl w-[36%] sm:w-full"
                size="txtPoppinsMedium20"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <div className="flex  gap-5 flex-row font-poppins items-center justify-between mt-[30px] w-full">
                <div className="flex  flex-col items-center justify-start w-[41%] ">
                  <Img
                    className="h-[600px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_julianhochgesa.png"
                    alt="julianhochgesa"
                  />
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-1/2 md:w-full">
                  <Text className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700" size="txtPoppinsBold30">
                    Get Popular NFT
                  </Text>
                  <Text
                    className="leading-[180.00%] mt-1.5 text-white-A700_7f text-xl w-full"
                    size="txtPoppinsMedium20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                    mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                    interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
                    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
                    auctor purus luctus enim egestas, ac scelerisque ante pulvinar.{" "}
                  </Text>
                  <Button className="cursor-pointer bg-purple-500 font-medium leading-[normal] min-w-[154px] mt-[30px] text-center text-xl">
                    Show more
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1198px] mt-[198px] mx-auto  w-full">
            <div className="flex flex-col gap-[11px] items-center justify-start">
              <Text className=" text-[40px] text-white-A700" size="txtPoppinsBold40">
                Colleaction
              </Text>
              <Text className="text-center text-white-A700_7f text-xl w-full" size="txtPoppinsMedium20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </div>
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <div className="gap-[15px] grid  grid-cols-4 items-center justify-between w-full">
                <Button className="cursor-pointer flex-1 font-medium leading-[normal] text-center text-xl w-full">
                  Art
                </Button>
                <Button className="bg-gradient  flex-1 h-10 pb-0.5 pt-[7px] sm:px-5 px-[35px] rounded-[10px] text-white-A700 text-xl w-full">
                  Sport
                </Button>
                <Button className="bg-white-A700_19 flex-1 h-10 justify-center pb-0.5 pt-[7px] sm:px-5 px-[35px] rounded-[10px] text-white-A700 text-xl w-full">
                  Photograpy
                </Button>
                <Button className="cursor-pointer flex-1 font-medium leading-[normal] text-center text-xl w-full">
                  Pattern
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className=" gap-[15px] grid  grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[380px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                          src="images/img_rectangle23.png"
                          alt="rectangleTwentyThree"
                        />
                        <div className="flex flex-row items-start justify-between mt-[19px] w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                            <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                              @Johny
                            </Text>
                            <Text className="text-white-A700 text-xl" size="txtPoppinsBold20">
                              Yellow Painting
                            </Text>
                          </div>
                          <div className="h-[52px] relative w-[30%]">
                            <Text
                              className="mb-[-0.16px] ml-auto text-[15px] text-white-A700_7f z-[1]"
                              size="txtPoppinsMedium15"
                            >
                              Current Bid
                            </Text>
                            <Text className="mt-auto mx-auto text-white-A700 text-xl" size="txtPoppinsBold20">
                              0.005 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mt-[21px] text-center text-xl w-[337px]"
                          color="deep_purple_A100_deep_purple_A700"
                        >
                          Place a bid
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[380px] sm:h-auto object-cover w-full"
                          src="images/img_collection2.png"
                          alt="collectionTwo"
                        />
                        <div className="flex flex-row items-start justify-between mt-[19px] w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                            <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                              @Johny
                            </Text>
                            <Text className="text-white-A700 text-xl" size="txtPoppinsBold20">
                              Yellow Painting
                            </Text>
                          </div>
                          <div className="h-[52px] relative w-[30%]">
                            <Text
                              className="mb-[-0.16px] ml-auto text-[15px] text-white-A700_7f z-[1]"
                              size="txtPoppinsMedium15"
                            >
                              Current Bid
                            </Text>
                            <Text className="mt-auto mx-auto text-white-A700 text-xl" size="txtPoppinsBold20">
                              0.005 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mt-[21px] text-center text-xl w-[337px]"
                          color="deep_purple_A100_deep_purple_A700"
                        >
                          Place a bid
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[380px] sm:h-auto object-cover w-full"
                          src="images/img_collection2.png"
                          alt="collectionThree"
                        />
                        <div className="flex flex-row items-start justify-between mt-[19px] w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                            <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                              @Johny
                            </Text>
                            <Text className="text-white-A700 text-xl" size="txtPoppinsBold20">
                              Yellow Painting
                            </Text>
                          </div>
                          <div className="h-[52px] relative w-[30%]">
                            <Text
                              className="mb-[-0.16px] ml-auto text-[15px] text-white-A700_7f z-[1]"
                              size="txtPoppinsMedium15"
                            >
                              Current Bid
                            </Text>
                            <Text className="mt-auto mx-auto text-white-A700 text-xl" size="txtPoppinsBold20">
                              0.005 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mt-[21px] text-center text-xl w-[337px]"
                          color="deep_purple_A100_deep_purple_A700"
                        >
                          Place a bid
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[380px] sm:h-auto object-cover w-full"
                          src="images/img_collection2.png"
                          alt="collectionFour"
                        />
                        <div className="flex flex-row items-start justify-between mt-[19px] w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                            <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                              @Johny
                            </Text>
                            <Text className="text-white-A700 text-xl" size="txtPoppinsBold20">
                              Yellow Painting
                            </Text>
                          </div>
                          <div className="h-[52px] relative w-[30%]">
                            <Text
                              className="mb-[-0.16px] ml-auto text-[15px] text-white-A700_7f z-[1]"
                              size="txtPoppinsMedium15"
                            >
                              Current Bid
                            </Text>
                            <Text className="mt-auto mx-auto text-white-A700 text-xl" size="txtPoppinsBold20">
                              0.005 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mt-[21px] text-center text-xl w-[337px]"
                          color="deep_purple_A100_deep_purple_A700"
                        >
                          Place a bid
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700_7f flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[380px] sm:h-auto object-cover w-full"
                          src="images/img_collection2.png"
                          alt="collectionFive"
                        />
                        <div className="flex flex-row items-start justify-between mt-[19px] w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                            <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                              @Johny
                            </Text>
                            <Text className="text-white-A700 text-xl" size="txtPoppinsBold20">
                              Yellow Painting
                            </Text>
                          </div>
                          <div className="h-[52px] relative w-[30%]">
                            <Text
                              className="mb-[-0.16px] ml-auto text-[15px] text-white-A700_7f z-[1]"
                              size="txtPoppinsMedium15"
                            >
                              Current Bid
                            </Text>
                            <Text className="mt-auto mx-auto text-white-A700 text-xl" size="txtPoppinsBold20">
                              0.005 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="!text-deep_purple-A100 bg-transparent cursor-pointer font-medium leading-[normal] mt-[21px] text-center text-xl w-[337px]"
                          variant="outline"
                          color="deep_purple_A100_deep_purple_A700"
                        >
                          Place a bid
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[380px] sm:h-auto object-cover w-full"
                          src="images/img_collection2.png"
                          alt="collectionSix"
                        />
                        <div className="flex flex-row items-start justify-between mt-[19px] w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                            <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                              @Johny
                            </Text>
                            <Text className="text-white-A700 text-xl" size="txtPoppinsBold20">
                              Yellow Painting
                            </Text>
                          </div>
                          <div className="h-[52px] relative w-[30%]">
                            <Text
                              className="mb-[-0.16px] ml-auto text-[15px] text-white-A700_7f z-[1]"
                              size="txtPoppinsMedium15"
                            >
                              Current Bid
                            </Text>
                            <Text className="mt-auto mx-auto text-white-A700 text-xl" size="txtPoppinsBold20">
                              0.005 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mt-[21px] text-center text-xl w-[337px]"
                          color="deep_purple_A100_deep_purple_A700"
                        >
                          Place a bid
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[380px] sm:h-auto object-cover w-full"
                          src="images/img_collection2.png"
                          alt="collectionSeven"
                        />
                        <div className="flex flex-row items-start justify-between mt-[19px] w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                            <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                              @Johny
                            </Text>
                            <Text className="text-white-A700 text-xl" size="txtPoppinsBold20">
                              Yellow Painting
                            </Text>
                          </div>
                          <div className="h-[52px] relative w-[30%]">
                            <Text
                              className="mb-[-0.17px] ml-auto text-[15px] text-white-A700_7f z-[1]"
                              size="txtPoppinsMedium15"
                            >
                              Current Bid
                            </Text>
                            <Text className="mt-auto mx-auto text-white-A700 text-xl" size="txtPoppinsBold20">
                              0.005 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mt-[21px] text-center text-xl w-[337px]"
                          color="deep_purple_A100_deep_purple_A700"
                        >
                          Place a bid
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[380px] sm:h-auto object-cover w-full"
                          src="images/img_collection2.png"
                          alt="collectionEight"
                        />
                        <div className="flex flex-row items-start justify-between mt-[19px] w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                            <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                              @Johny
                            </Text>
                            <Text className="text-white-A700 text-xl" size="txtPoppinsBold20">
                              Yellow Painting
                            </Text>
                          </div>
                          <div className="h-[52px] relative w-[30%]">
                            <Text
                              className="mb-[-0.17px] ml-auto text-[15px] text-white-A700_7f z-[1]"
                              size="txtPoppinsMedium15"
                            >
                              Current Bid
                            </Text>
                            <Text className="mt-auto mx-auto text-white-A700 text-xl" size="txtPoppinsBold20">
                              0.005 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mt-[21px] text-center text-xl w-[337px]"
                          color="deep_purple_A100_deep_purple_A700"
                        >
                          Place a bid
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[380px] sm:h-auto object-cover w-full"
                          src="images/img_collection2.png"
                          alt="collectionNine"
                        />
                        <div className="flex flex-row items-start justify-between mt-[19px] w-full">
                          <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                            <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                              @Johny
                            </Text>
                            <Text className="text-white-A700 text-xl" size="txtPoppinsBold20">
                              Yellow Painting
                            </Text>
                          </div>
                          <div className="h-[52px] relative w-[30%]">
                            <Text
                              className="mb-[-0.17px] ml-auto text-[15px] text-white-A700_7f z-[1]"
                              size="txtPoppinsMedium15"
                            >
                              Current Bid
                            </Text>
                            <Text className="mt-auto mx-auto text-white-A700 text-xl" size="txtPoppinsBold20">
                              0.005 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] mt-[21px] text-center text-xl w-[337px]"
                          color="deep_purple_A100_deep_purple_A700"
                        >
                          Place a bid
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1197px] mt-[199px] mx-auto  w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start">
              <Text className=" text-[40px] text-white-A700" size="txtPoppinsBold40">
                Featured Artworks
              </Text>
              <Text className="text-center text-white-A700_7f text-xl w-full" size="txtPoppinsMedium20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </div>
            <List className=" flex-row gap-[15px] grid  grid-cols-3 justify-center w-full" orientation="horizontal">
              <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[380px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle23.png"
                    alt="rectangleTwentyThree"
                  />
                  <div className="flex flex-row items-start justify-between mt-[19px] w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                      <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                        @Johny
                      </Text>
                      <Text className="text-white-A700 text-xl" size="txtPoppinsBold20">
                        Yellow Painting
                      </Text>
                    </div>
                    <div className="h-[52px] relative w-[30%]">
                      <Text
                        className="mb-[-0.16px] ml-auto text-[15px] text-white-A700_7f z-[1]"
                        size="txtPoppinsMedium15"
                      >
                        Current Bid
                      </Text>
                      <Text className="mt-auto mx-auto text-white-A700 text-xl" size="txtPoppinsBold20">
                        0.005 ETH
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mt-[21px] text-center text-xl w-[337px]"
                    color="deep_purple_A100_deep_purple_A700"
                  >
                    Place a bid
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[380px] sm:h-auto object-cover w-full"
                    src="images/img_collection2.png"
                    alt="groupSeven"
                  />
                  <div className="flex flex-row items-start justify-between mt-[19px] w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                      <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                        @Johny
                      </Text>
                      <Text className="text-white-A700 text-xl" size="txtPoppinsBold20">
                        Yellow Painting
                      </Text>
                    </div>
                    <div className="h-[52px] relative w-[30%]">
                      <Text
                        className="mb-[-0.16px] ml-auto text-[15px] text-white-A700_7f z-[1]"
                        size="txtPoppinsMedium15"
                      >
                        Current Bid
                      </Text>
                      <Text className="mt-auto mx-auto text-white-A700 text-xl" size="txtPoppinsBold20">
                        0.005 ETH
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mt-[21px] text-center text-xl w-[337px]"
                    color="deep_purple_A100_deep_purple_A700"
                  >
                    Place a bid
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700_7f flex flex-1 flex-col items-center justify-start p-[26px] sm:px-5 rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[380px] sm:h-auto object-cover w-full"
                    src="images/img_collection2.png"
                    alt="groupSeven"
                  />
                  <div className="flex flex-row items-start justify-between mt-[19px] w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start mt-0.5">
                      <Text className="text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                        @Johny
                      </Text>
                      <Text className="text-white-A700 text-xl" size="txtPoppinsBold20">
                        Yellow Painting
                      </Text>
                    </div>
                    <div className="h-[52px] relative w-[30%]">
                      <Text
                        className="mb-[-0.16px] ml-auto text-[15px] text-white-A700_7f z-[1]"
                        size="txtPoppinsMedium15"
                      >
                        Current Bid
                      </Text>
                      <Text className="mt-auto mx-auto text-white-A700 text-xl" size="txtPoppinsBold20">
                        0.005 ETH
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="!text-deep_purple-A100 bg-transparent cursor-pointer font-medium leading-[normal] mt-[21px] text-center text-xl w-[337px]"
                    variant="outline"
                    color="deep_purple_A100_deep_purple_A700"
                  >
                    Place a bid
                  </Button>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1197px] mt-[205px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start">
              <Text className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700" size="txtPoppinsBold40">
                Top Creator
              </Text>
              <Text className="mt-1 text-center text-white-A700_7f text-xl w-full" size="txtPoppinsMedium20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </div>
            <List className=" flex-row gap-[15px] grid  grid-cols-3 justify-center w-full" orientation="horizontal">
              <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start pb-[42px] rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col relative w-full">
                  <div className="flex flex-col items-center justify-start mx-auto w-full">
                    <Img
                      className="h-[261px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                      src="images/img_dancristianpa.png"
                      alt="dancristianpa"
                    />
                  </div>
                  <div className="flex flex-col h-[99px] items-center justify-start mt-[-45px] mx-auto w-[99px] z-[1]">
                    <Img
                      className="h-[99px] md:h-auto rounded-[50%] w-[99px]"
                      src="images/img_aionyhaust3tl.png"
                      alt="aionyhaust3tl"
                    />
                  </div>
                </div>
                <Text className="mt-[9px] text-white-A700 text-xl" size="txtPoppinsBold20">
                  John Wick
                </Text>
                <Text
                  className="mt-2.5 text-[15px] text-center text-white-A700_7f w-[79%] sm:w-full"
                  size="txtPoppinsMedium15"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] mt-[22px] text-center text-xl w-[337px]"
                  color="deep_purple_A100_deep_purple_A700"
                >
                  + Follow
                </Button>
              </div>
              <div className="bg-white-A700_7f flex flex-1 flex-col items-center justify-start pb-[42px] rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col relative w-full">
                  <div className="flex flex-col items-center justify-start mx-auto w-full">
                    <Img
                      className="h-[261px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                      src="images/img_davidsjunnesso.png"
                      alt="davidsjunnesso"
                    />
                  </div>
                  <div className="flex flex-col h-[99px] items-center justify-start mt-[-45px] mx-auto w-[99px] z-[1]">
                    <Img
                      className="h-[99px] md:h-auto rounded-[50%] w-[99px]"
                      src="images/img_albertderaili.png"
                      alt="albertderaili"
                    />
                  </div>
                </div>
                <Text className="mt-[9px] text-white-A700 text-xl" size="txtPoppinsBold20">
                  John Wick
                </Text>
                <Text
                  className="mt-2.5 text-[15px] text-center text-white-A700_7f w-[79%] sm:w-full"
                  size="txtPoppinsMedium15"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Button
                  className="!text-deep_purple-A100 bg-transparent cursor-pointer font-medium leading-[normal] mt-[22px] text-center text-xl w-[337px]"
                  variant="outline"
                  color="deep_purple_A100_deep_purple_A700"
                >
                  + Followed
                </Button>
              </div>
              <div className="bg-white-A700_19 flex flex-1 flex-col items-center justify-start pb-[42px] rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col relative w-full">
                  <div className="flex flex-col items-center justify-start mx-auto w-full">
                    <Img
                      className="h-[261px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                      src="images/img_zak7wbfshwqdlkunsplash.png"
                      alt="dancristianpa"
                    />
                  </div>
                  <div className="flex flex-col h-[99px] items-center justify-start mt-[-45px] mx-auto w-[99px] z-[1]">
                    <Img
                      className="h-[99px] md:h-auto rounded-[50%] w-[99px]"
                      src="images/img_stefanociociol.png"
                      alt="aionyhaust3tl"
                    />
                  </div>
                </div>
                <Text className="mt-[9px] text-white-A700 text-xl" size="txtPoppinsBold20">
                  John Wick
                </Text>
                <Text
                  className="mt-2.5 text-[15px] text-center text-white-A700_7f w-[79%] sm:w-full"
                  size="txtPoppinsMedium15"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] mt-[22px] text-center text-xl w-[337px]"
                  color="deep_purple_A100_deep_purple_A700"
                >
                  + Follow
                </Button>
              </div>
            </List>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1197px] mt-[200px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[47px] items-center justify-start w-full">
              <div className="flex flex-col gap-2.5 items-center justify-center w-auto sm:w-full">
                <Text
                  className="leading-[180.00%] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                  size="txtPoppinsBold40"
                >
                  <>
                    Freaquently Asked
                    <br />
                    Question
                  </>
                </Text>
                <Text className="text-white-A700_7f text-xl w-auto" size="txtPoppinsMedium20">
                  Wanna Ask Something?
                </Text>
              </div>
              <List
                className=" flex-row gap-[15px] grid  grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex  flex-col gap-[50px] items-start justify-start w-auto ">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <Text className="mt-0.5 text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                          Lorem ipsum ipsum ?
                        </Text>
                        <Text className="mb-0.5 text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                          +
                        </Text>
                      </div>
                      <Line className="bg-white-A700 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <Text className="mt-0.5 text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                          Lorem ipsum ipsum ?
                        </Text>
                        <Text className="mb-0.5 text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                          +
                        </Text>
                      </div>
                      <Line className="bg-white-A700 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <Text className="mt-0.5 text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                          Lorem ipsum ipsum ?
                        </Text>
                        <Text className="mb-0.5 text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                          +
                        </Text>
                      </div>
                      <Line className="bg-white-A700 h-px w-full" />
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[50px] items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <Text className="mt-0.5 text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                          Lorem ipsum ipsum ?
                        </Text>
                        <Text className="mb-0.5 text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                          +
                        </Text>
                      </div>
                      <Line className="bg-white-A700 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <Text className="mt-0.5 text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                          Lorem ipsum ipsum ?
                        </Text>
                        <Text className="mb-0.5 text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                          +
                        </Text>
                      </div>
                      <Line className="bg-white-A700 h-px w-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <Text className="mt-0.5 text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                          Lorem ipsum ipsum ?
                        </Text>
                        <Text className="mb-0.5 text-white-A700_7f text-xl" size="txtPoppinsMedium20">
                          +
                        </Text>
                      </div>
                      <Line className="bg-white-A700 h-px w-full" />
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="bg-purple-500  flex flex-col gap-5 items-center justify-start max-w-[1197px] mt-[199px] mx-auto p-[50px] md:px-5 rounded-[10px] w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
              size="txtPoppinsBold50"
            >
              <>
                Get ready to collect
                <br />
                our NFT
              </>
            </Text>
            <Button
              className="cursor-pointer bg-purple-200 font-medium leading-[normal] min-w-[155px] text-center text-xl"
             
            >
              Get Started
            </Button>
          </div>
          <div className="flex  flex-row  items-start justify-between max-w-[1197px] mt-[199px] mx-auto  w-full">
            <div className="flex flex-col gap-[17px] items-start justify-start  mt-0.5">
              <Text className="text-center text-white-A700 text-xl" >
                <span className="text-white-A700 font-poppins font-bold">Psycho</span>
                <span className="text-deep_purple-A100 font-poppins font-bold">Art</span>
              </Text>
              <Text className="text-[15px] text-white-A700_7f w-full" size="txtPoppinsMedium15">
                The best NFT marketplace website in the world and feel your experience in selling or buy our work
              </Text>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[131px] grid grid-cols-2 w-[32%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-5 items-start justify-start sm:ml-[0] w-full">
                <Text className="text-center text-white-A700 text-xl" size="txtPoppinsBold20">
                  About
                </Text>
                <Text className="text-[15px] text-white-A700_7f" size="txtPoppinsMedium15">
                  Product
                </Text>
                <Text className="text-[15px] text-white-A700_7f" size="txtPoppinsMedium15">
                  Resource
                </Text>
                <Text className="text-[15px] text-white-A700_7f" size="txtPoppinsMedium15">
                  Term & Condition
                </Text>
                <Text className="text-[15px] text-white-A700_7f" size="txtPoppinsMedium15">
                  FAQ
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start sm:ml-[0] sm:mt-0 mt-0.5 w-full">
                <Text className="text-center text-white-A700 text-xl" size="txtPoppinsBold20">
                  Company
                </Text>
                <Text className="mt-[17px] text-[15px] text-white-A700_7f" size="txtPoppinsMedium15">
                  Our Team
                </Text>
                <Text className="mt-[19px] text-[15px] text-white-A700_7f" size="txtPoppinsMedium15">
                  Partner With Us
                </Text>
                <Text className="mt-[21px] text-[15px] text-white-A700_7f" size="txtPoppinsMedium15">
                  Privacy & Policy
                </Text>
                <Text className="mt-[18px] text-[15px] text-white-A700_7f" size="txtPoppinsMedium15">
                  Features
                </Text>
              </div>
            </List>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[23%] md:w-full">
              <Text className="text-center text-white-A700 text-xl" size="txtPoppinsBold20">
                Contact
              </Text>
              <Text className="mt-5 text-[15px] text-white-A700_7f" size="txtPoppinsMedium15">
                +012 3456789
              </Text>
              <Text className="mt-[21px] text-[15px] text-white-A700_7f" size="txtPoppinsMedium15">
                adorableprogrammer@gmail.com
              </Text>
              <div className="flex flex-row gap-10 items-center justify-center mt-[18px] w-auto">
                <Img className="h-[25px] w-[25px]" src="images/img_youtube.svg" alt="youtube" />
                <Img className="h-[25px] w-[25px]" src="images/img_discord.svg" alt="discord" />
                <Img className="h-[25px] w-[25px]" src="images/img_instagram.svg" alt="instagram" />
              </div>
            </div>
          </div>
          <Text className="mb-[89px] mt-[100px] text-white-A700_7f text-xl" size="txtPoppinsMedium20">
            <span className="text-white-A700_7f font-poppins text-left font-medium">Created by </span>
            <span className="text-white-A700 font-poppins text-left font-bold">Zarror</span>
            <span className="text-white-A700_7f font-poppins text-left font-medium"> | All Right Reserved!</span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default Home;
