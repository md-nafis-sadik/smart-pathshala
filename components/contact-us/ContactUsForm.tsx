import {
  ArrowLongTailIcon,
  MailIcon,
  TelegramOutlinedIcon,
  WhatsappOutlinedIcon,
} from "@/services/assets/svgs";
import { Button } from "../ui/button";
import BudgetTags from "./BudgetTags";
import ContactItem from "./ContactItem";

function ContactUsForm({ query = "" }: { query: string | undefined }) {
  return (
    <div className="pt-10 sm:pt-16 md:pt-20 pb-8 sm:pb-16 md:pb-20 lg:pb-30">
      <div className="containerX">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 justify-between">
          <div className="lg:col-span-6">
            <h1 className="title blackGradient">Get in touch</h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-text-600 uppercase leading-[140%] mt-6 md:mt-5">
              Contact with us
            </p>
            <div className="mt-6 sm:mt-8 md:mt-10">
              <ContactItem
                icon={
                  <WhatsappOutlinedIcon
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    color="#000000"
                  />
                }
                title="Whatsapp Link"
                linkText="https://wa.me/message/2QBWTQI4J4MIF1"
              />
              <ContactItem
                icon={
                  <TelegramOutlinedIcon
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    color="#000000"
                  />
                }
                title="Telegram Link"
                linkText="https://t.me/netrosystems"
              />
              <ContactItem
                icon={<MailIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
                title="Email Us"
                linkText="hello@netrosystems.com"
                isBordered={false}
              />
            </div>
          </div>
          <div className="w-full lg:col-span-5 lg:col-start-8">
            <form
              action="#"
              className="w-full px-4 sm:px-7 md:px-10 py-6 sm:py-8 md:py-10 border border-dashed border-natural-300 flex flex-col gap-6 sm:gap-8 md:gap-10"
            >
              <input
                type="text"
                name="username"
                className="input"
                placeholder="Your Name"
              />
              <input
                type="text"
                name="username"
                className="input"
                placeholder="Your Name"
              />
              <textarea
                name="username"
                className="input h-30"
                placeholder="Your Name"
              />
              <div className="">
                <p className="text-base text-text-700 leading-[120%] font-medium">
                  Project Budget
                </p>
                <BudgetTags query={query} />
              </div>
              <Button className="w-fit group">
                <span className="!leading-none">Send Message</span>
                <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
