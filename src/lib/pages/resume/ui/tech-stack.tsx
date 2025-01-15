import { TechStack as TechStackType } from "@/shared/types/resume";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui";
import { Badge } from "@/shared/ui/badge";

type Props = {
  data: TechStackType;
};

export const TechStack: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {/* {Object.entries(data).map(([key, value]) => {
        return (
          <div key={key} className="mb-8">
            <h2 className="font-bold uppercase">{key}:</h2>

            <ul className="space-y-2">
              {Object.entries(value).map(([k, v]) => (
                <li key={k} className="flex gap-2">
                  <b>{k}:</b>
                  <div className="flex gap-2">
                    {(v as string[]).map((tech) => (
                      <Badge
                        variant="outline"
                        className="rounded-lg"
                        key={tech}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })} */}
      <Tabs defaultValue="frontend" className="w-[400px]">
        <TabsList>
          {Object.keys(data).map((tabName) => (
            <TabsTrigger key={tabName} value={tabName}>
              {tabName}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(data).map(([key, value]) => (
          <TabsContent key={key} value={key}>
            <ul className="space-y-2">
              {Object.entries(value).map(([k, v]) => (
                <li key={k} className="flex gap-2">
                  <b>{k}:</b>
                  <div className="flex gap-2">
                    {(v as string[]).map((tech) => (
                      <Badge
                        variant="outline"
                        className="rounded-lg"
                        key={tech}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
