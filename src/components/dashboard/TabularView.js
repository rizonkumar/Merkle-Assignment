import React from "react";
import { DUMMY_DATA_Tabular } from "../../utils/constants";

const TabularView = () => {
  return (
    <div className="p-4">
      {DUMMY_DATA_Tabular.projects.map((project) => (
        <div key={project.id} className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4">{project.name}</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-black bg-white rounded-lg shadow overflow-hidden">
              <thead className="bg-gray-700 text-black">
                <tr>
                  <th className="px-4 py-2">Task</th>
                  <th className="px-4 py-2">Start Date</th>
                  <th className="px-4 py-2">End Date</th>
                  <th className="px-4 py-2">Assigned To</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {project.tasks.map((task) => (
                  <tr key={task.id} className="border-b">
                    <td className="px-4 py-2">{task?.name}</td>
                    <td className="px-4 py-2">{task?.start_date}</td>
                    <td className="px-4 py-2">{task?.end_date}</td>
                    <td className="px-4 py-2">{task?.assigned_to}</td>
                    <td className="px-4 py-2">{task?.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabularView;
