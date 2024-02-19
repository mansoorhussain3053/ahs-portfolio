import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FaQuoteRight } from "react-icons/fa";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ATestimonials = () => {



  return (
    <div className="p-30">
      <div className="max-w-screen-xl m-auto py-16">
        <div className="text-center flex flex-col gap-7">
          <p className="paragraph">What my clients think about me</p>
          <h3 className="heading3">Testimonials</h3>
        </div>

        <div className="py-16">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-transparent border-[#009e66]">
                    <CardContent className="flex aspect-square items-center justify-center p-10">
                        <div className="flex flex-col gap-10">
                        <div className="flex items-center gap-10">
                        <div className="flex items-center gap-5">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                   
                      </Avatar>
                      <div>
                        <h3 className="paragraph text-[#fff]">Maria Wilson</h3>
                        <p className="paragraph">Envato Customer</p>
                      </div>
                      </div>
                      <div><i className="text-[#009e66] text-4xl"><FaQuoteRight/></i></div>
                     
                      </div>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam, eum, ipsam eligendi distinctio voluptatibus quae nobis perferendis ratione cumque ea hic alias molestias omnis voluptate repellendus eaque, similique sapiente.em30</p>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-transparent border-[#009e66]">
                    <CardContent className="flex aspect-square items-center justify-center p-10">
                        <div className="flex flex-col gap-10">
                        <div className="flex items-center gap-10">
                        <div className="flex items-center gap-5">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                   
                      </Avatar>
                      <div>
                        <h3 className="paragraph text-[#fff]">Maria Wilson</h3>
                        <p className="paragraph">Envato Customer</p>
                      </div>
                      </div>
                      <div><i className="text-[#009e66] text-4xl"><FaQuoteRight/></i></div>
                     
                      </div>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam, eum, ipsam eligendi distinctio voluptatibus quae nobis perferendis ratione cumque ea hic alias molestias omnis voluptate repellendus eaque, similique sapiente.em30</p>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>


              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-transparent border-[#009e66]">
                    <CardContent className="flex aspect-square items-center justify-center p-10">
                        <div className="flex flex-col gap-10">
                        <div className="flex items-center gap-10">
                        <div className="flex items-center gap-5">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                   
                      </Avatar>
                      <div>
                        <h3 className="paragraph text-[#fff]">Maria Wilson</h3>
                        <p className="paragraph">Envato Customer</p>
                      </div>
                      </div>
                      <div><i className="text-[#009e66] text-4xl"><FaQuoteRight/></i></div>
                     
                      </div>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam, eum, ipsam eligendi distinctio voluptatibus quae nobis perferendis ratione cumque ea hic alias molestias omnis voluptate repellendus eaque, similique sapiente.em30</p>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>


              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-transparent border-[#009e66]">
                    <CardContent className="flex aspect-square items-center justify-center p-10">
                        <div className="flex flex-col gap-10">
                        <div className="flex items-center gap-10">
                        <div className="flex items-center gap-5">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                   
                      </Avatar>
                      <div>
                        <h3 className="paragraph text-[#fff]">Maria Wilson</h3>
                        <p className="paragraph">Envato Customer</p>
                      </div>
                      </div>
                      <div><i className="text-[#009e66] text-4xl"><FaQuoteRight/></i></div>
                     
                      </div>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aperiam, eum, ipsam eligendi distinctio voluptatibus quae nobis perferendis ratione cumque ea hic alias molestias omnis voluptate repellendus eaque, similique sapiente.em30</p>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-[#009e66] border-[#009e66]"  />
            <CarouselNext className="bg-[#009e66] border-[#009e66]"/>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ATestimonials;
