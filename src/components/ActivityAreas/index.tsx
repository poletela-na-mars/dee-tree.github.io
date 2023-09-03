import { useState } from 'react';

import { activityAreas } from '../../assets/consts';

import styles from '../../scss/AboutMe/ActivityAreas/ActivityAreas.module.scss';

export const ActivityAreas = () => {
  type Modals = Record<string, boolean>;
  const modals: Modals = {
    '0': false,
    '1': false,
    '2': false,
    '3': false,
  };
  const [isModalOpen, setIsModalOpen] = useState<Modals>(modals);

  const onButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;

    if (isModalOpen[String(target.id)]) setIsModalOpen({ ...modals, [String(target.id)]: false });
    else setIsModalOpen({ ...modals, [String(target.id)]: true });
  };

  return (
      <div className={styles.areasBlock}>
        {
          activityAreas.map((area, idx) =>
              <div className={styles.areaPopup} key={idx}>
                <button id={String(idx)} onClick={onButtonClickHandler} className={styles.classicButton}>
                  <h3>{area.area}</h3>
                </button>
                {
                    isModalOpen[String(idx)] &&
                    <ul className={styles.subArea}>
                      {
                        area.subareas.map((subArea, idx) => <li key={idx}>{subArea}</li>)
                      }
                    </ul>
                }
              </div>
          )}

      </div>
  );
};
