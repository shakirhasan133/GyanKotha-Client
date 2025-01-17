import Lottie from "lottie-react";
import student from "../assets/student.json";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/UseAxiosPublic";

const StatisticsSection = () => {
  const axiospublic = useAxiosPublic();

  const { data: Stats = [] } = useQuery({
    queryKey: ["HomeStats"],
    queryFn: async () => {
      const { data } = await axiospublic.get("/getHomeStats");
      return data;
    },
  });

  return (
    <section className="bg-gradient-to-r from-primary-light to-primary-darkest py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side: Stats Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white border rounded-lg shadow-lg p-6 text-center flex flex-col items-center justify-center gap-2">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBUlEQVR4nO1XzY8VRRAvVEAFxUiCHj24QKKehMQLiSeQGOGiAeRDQ9QIEuNXIJy48RcQYCNCAoSPmer3YKdq3i5KNgHUCCveTVzj50GjJrCCJsCSqu7X7+3Ozs68ebPJi84v6WTSU9310V2/qgaoUKFChQoVKrThzJmHAHk3GLoChsbcuKJzwfB86GmYeDkY/hkMj085kH6CkJdBT6LGiwH5L2ssXQKMVmnEZci34c+tE/wnYNQHPQdDnznjT8Hw8H2J/zKHHLiTOAc9BRxY6oz/A4JPF6TK1euP6AmIrJzYjGJ8fBaE0Wv26H0yXgKkzfqvHUhvuXt+NHNfw8ec7BuF9eWC4SOpyWjok4kOCOvo/N7sfWmvy4XdhfVlIqRNbuF1jdTZs49BQI9Djd90c2LAq15e53OeANLxxAmEHerLRJMxavx20oB4m2eayTkg97tIDpgO9WUC+W+7aGhR0rmhRW7DsYlr6JxzIkhnIQpd9Ae71le+A1Gfj65NxBe0Ksuo8WpA/qLFVINPdq1vWviiE29L/qPtjssvJv5JlZVqm16Jf4Q6PVuavlSYeOOEpDoWP6yjPalC2jDlWqm8hnYB0mUrS9cB+StA3glHh+aVri8VSIfTaY0PQdnAsvVpYaFNenTNSBq+oNEqVFh6TN9/Exj1gaGPlCYNj7ZaAv4OkBuA/GGCgWYER4bvd9XxNCB9D4ZvOKobBeSTWhWDYI6XN9HTYAjB8O1p7nFz3NZ6EDae8uvjeK5NZDql+kSXDtV9Wv+JTC6IMNKvmYYg/wLI68DQ+4D0j5sTpYfBxC9DvfEEDAw8qEO+a/SK63duOMa5qWtNtD63vmmZqH9kNiB93LZgREt70FiiRgTBA9oyCFcjf5OIqqH9EAw+mhmgWm0hIB9MnhZdtXsPLFVdqrOxxLYSdLVNtj9Z6SXLPY3RGCC9Pm3my7/mAwb5Ghh6EToFxi95jpe9svSF8dZWxZ5Mq2KwLyTx8mzl0SpAuqNXJ4xWQFGE0fNg+F/dK4xXZsqb+DlHCuLEFjspR4X8u52MN2ZuIsnUahfeKWy8N4re9Q/+PIkqDxwb7N/0qunR2A2+zKXQvppE/jLs2XNP1w4Ewb2A/PXEqGZAWhNtL+Kt4tH5DhePuLu/DspCSBs8ceSB2GqDeB78ncrFILy49XBpqwPdIgjmdPTYFyZrEggY/sFHNOtKtJ6OJ6BsIJ+c8rE/GWJj88SksPokSu/hW3048o5ij+w8DlCTxre3zV3MKHCORKwToylCF/yGdX5GKU/pNlqjxa9b9I/Mhhqtte8GodO2FiPdAWlpdhRTiHQgR79TbCDtgxmHpb0PwPC3YPhWCYbfsntF75VCyxUqVKhQ4X+Fu+kcvlWXV20hAAAAAElFTkSuQmCC"
              alt="group"
            />
            <h3 className="text-3xl font-bold text-primary ">{Stats?.user}</h3>
            <p className="text-gray-600">Total Users</p>
          </div>
          {/* Class */}
          <div className="bg-white border rounded-lg shadow-lg p-6 text-center flex flex-col items-center justify-center gap-2">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkUlEQVR4nO2Zz2sTURDHvypeRI9e/HXwBz1YPKgXwZt/g4i34qGHHhRBqbfEP8GDYMGTp7I7k4RkZlMQKZR660kqnsSAKFRFawsKSozsSxpj3Gw32132bd0vPEh2897OZ97MvLcvQKFCKarT2QPWjsWt/d8AtGGbOKpdzuJB1OsHkDsAp34CpBWwbIJ0AyxVOM0J5ALAMcZ//ifm/GvVheOwHoB8z49IHBIX1gOwbIYAfIXVAJ1tSifJL9gg3rUAvkzVGQWgX5CDHKiOngWZT9yYUmkvWG6DZTWhMtqcGFFGP8FpHE3OcgDUOAOWZbAuwVk4ndxCxt4xkDpgWe+1+USN3/I66UeQ3jLfx1GmWxySk2BdBOvz2Kv7SAC3eRasZbC8BNfP969X5QJYX4P0ASre5VgP9SscybTxOsssHGdfrHECASreKbA+HYr5RwMd5oaSeRmV+qXID5xb2R8r1iMB1GpHQPI2IGk3zG60VjsUWFpJfoJlBmFyvMMmf4z3Y8R6JADWxyEL17Rp4YvbvcCHVOQqWD6A9RuSFg8CkLwPWbhWTNv+7aj8l9dNBesDvkkXgBN7xSsPeD3dxY9jA8jNbpWK+Ht/7+R6V+wBIFkDNyZBUooA+x2udyNx43ccQj6Er3CIV3C9c0hLvNMc6A8kswH3n5jym6Y4KQBfJFMgfQfWFly5nqrhqQBkId5dABIUx+HNjmPH9gDRmBDWAYwLYSXAOBDWihuTYL2fXwCSNbNvzy0AR4w/a8UFQMbiYgYyFhczkLG4mIGMxXmbAdJrYCGQvOgeo0fdCcp6rw+ZMbbk6kWQ3AXpQ7CoOW8leWb+vPAPh7utBZYfA2P5n1t/7stqt4/fV6U31h1zwDyk32LnGV5hkCN2AAAAAElFTkSuQmCC"
              alt="classroom--v1"
            />
            <h3 className="text-3xl font-bold text-primary ">
              {Stats?.classData}
            </h3>
            <p className="text-gray-600">Total Classes</p>
          </div>
          {/* Enrolement */}
          <div className="bg-white border rounded-lg shadow-lg p-6 text-center flex flex-col items-center justify-center gap-2">
            <img
              src="data:image/png;base64,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"
              alt="idea"
            />
            <h3 className="text-3xl font-bold text-primary ">
              {Stats?.totalEnroll}
            </h3>
            <p className="text-gray-600">Total Enrollments</p>
          </div>
          {/* Learner Report */}
          <div className="bg-white border rounded-lg shadow-lg p-6 text-center flex flex-col items-center justify-center gap-2">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADB0lEQVR4nO2ZSWgUURCGfzckehHE6MEVQY0GBCNuIF706kUUNIo3Ebx4cDnm4gIuMZqIxmMOEbqrupmZqo45haBGDfHmyYO44MEYVBQhcRtJN4Rxpnv6ZelxBvqHBwPdr977Xr1+VfMKSJUqVe3JkmVgvQzWx2B9CtZO2D2bEh7UmgPWKyAZBOlQRBuAnTtuZM/WrSD9CNZ8URsD6ZHkQEj2hgwa0uQHLKuurK1sdgFI3pWxMwarZ30yIFZmDVi+GcFY3pKytkiOxdogvZkMSDCBVSA9AEcO+u5nfTUlEJZrBgvSj8TV1bsQLDoNj3TEe0QGkz9pSJ8XbYOB2gJxvLVgfVn0cRMcZ3HtgDi5bWAZLvkgW1pmB1utFkA4tx+k3wsG+QPScxPPawLE0ZNg/VUwwChsOfTPO+NemfCWfEHn0LzqAcnnZ4H1QtFW+gzH2xP6vi3bwdIOO7c71jZVCqSvby5I7hVBvAfnNk/feKVAusJihLyA+2AFZkqUNEgQI4aKjPbBdRdhJkVJgji6riTlIL0Pz5tvtBUdafDb+O//BuJkd5am1HLdP43iDoTxY5h0pAB+BCxn/GcVBeGiGMH6G5w7bdSX5E70RPR25UAcgxgRJVt2xU6GvR3Jg7CeMo4Rof2lLX4y2po8CBWcTiRvwblGY4igP8d7RKgCIHICJD+DFNxbjsmKxTUAcZMHma5SEKQeMdgmuUY/SSR9BpZHYLmETGZpbW0t9pr9u6jSSQzDlabaAHGkIRxior2JvGyrKhCWdoPo3FwDINofb1CvVj8IyaCBwY4UhFOP5NOthfQb0fTUQnXEEe2OjyPaXZlCD+ktA5DwwiTLeYMYdDa0ry1HDYJp2yRAshv8wmO0wdfRuVZvvX9hHb0AnyJv5S2rzs/johdg1L9nm5SCWmApDMkHcHZL2b6s+0ILpKRf/SpwObnSVFJvCdoYbDmMKcnyNoL0rl+0J3kY3ML31hv1dXtWg+SG/98/aK2wsiuN+mYyS0Fy0R+T5Il/TzaekadKlQpT1V+Bo8TDdqYFVAAAAABJRU5ErkJggg=="
              alt="positive-dynamic"
            />
            <h3 className="text-3xl font-bold text-primary ">88%</h3>
            <p className="text-gray-600">Learners report career benefits</p>
          </div>
        </div>

        {/* Right Side: Relevant Image */}
        <div className="flex-1">
          <Lottie
            className="w-full md:w-[80vh] h-auto mb-8"
            animationData={student}
          ></Lottie>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
