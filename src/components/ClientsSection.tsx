import React from "react";

import { clients } from "../constents";
import styles from "../utils/style";

const ClientsSection = () => {
  return (
    <section id="clients" className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-30 transition-all py-3 px-1 rounded-[10px] duration-500 bg-gradient-to-r hover:from-green-400 hover:to-blue-500`}
          >
            <img
              src={client.logo}
              alt="Client"
              className="sm:w-[192px] w-100 h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
