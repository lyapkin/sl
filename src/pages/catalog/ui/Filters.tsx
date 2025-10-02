import Filter from "@/src/features/filter";
import { Button, Sheet } from "@/src/shared/ui";
import { useTranslations } from "next-intl";
import { HTMLAttributes } from "react";
import s from "./styles.module.scss";

const Filters = ({ className }: HTMLAttributes<HTMLElement>) => {
  const t = useTranslations("filters");
  return (
    <Sheet side="left" title={t("filters")}>
      <Sheet.Trigger>
        <Button type="secondary" className={className}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.875 2.5L13.1875 2.5M5.875 2.5C5.875 3.12132 5.37132 3.625 4.75 3.625C4.12868 3.625 3.625 3.12132 3.625 2.5M5.875 2.5C5.875 1.87868 5.37132 1.375 4.75 1.375C4.12868 1.375 3.625 1.87868 3.625 2.5M0.8125 2.5H3.625M5.875 11.5H13.1875M5.875 11.5C5.875 12.1213 5.37132 12.625 4.75 12.625C4.12868 12.625 3.625 12.1213 3.625 11.5M5.875 11.5C5.875 10.8787 5.37132 10.375 4.75 10.375C4.12868 10.375 3.625 10.8787 3.625 11.5M0.8125 11.5L3.625 11.5M10.375 7L13.1875 7M10.375 7C10.375 7.62132 9.87132 8.125 9.25 8.125C8.62868 8.125 8.125 7.62132 8.125 7M10.375 7C10.375 6.37868 9.87132 5.875 9.25 5.875C8.62868 5.875 8.125 6.37868 8.125 7M0.8125 7H8.125"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t("filters")}
        </Button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Filter className={s.filters}>
          <div className={s.filters__body}>
            <div className={s.filters__group}>
              <Filter.Toggle title={t("stock")} type={"stock"} />
              <Filter.Toggle title={t("disc")} type={"discount"} />
            </div>
            <div className={s.filters__group}>
              <Filter.Range type={"price"} minRange={1} maxRange={1500} />
            </div>
            <div className={s.filters__group}>
              <Filter.Params
                title="Бренд"
                type="brand"
                data={[
                  { id: 1, name: "Brand", slug: "brand" },
                  { id: 2, name: "Brand2", slug: "brand2" },
                  { id: 3, name: "Brand3", slug: "brand3" },
                  { id: 4, name: "Brand4", slug: "brand4" },
                  { id: 5, name: "Brand5", slug: "brand5" },
                  { id: 6, name: "Brand6", slug: "brand6" },
                ]}
              />
              <Filter.Params
                title="Страна"
                type="country"
                data={[
                  { id: 1, name: "Brand", slug: "brand" },
                  { id: 2, name: "Brand2", slug: "brand2" },
                  { id: 3, name: "Brand3", slug: "brand3" },
                  { id: 4, name: "Brand4", slug: "brand4" },
                ]}
              />
            </div>
          </div>
          <Filter.Apply>
            <Sheet.Trigger>
              <Button className={s.filters__footer} type="secondary">
                {t("show")}
              </Button>
            </Sheet.Trigger>
          </Filter.Apply>
        </Filter>
      </Sheet.Content>
    </Sheet>
  );
};

export default Filters;
