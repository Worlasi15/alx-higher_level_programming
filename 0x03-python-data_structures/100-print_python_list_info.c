#include <lists.h>

/**
 * print_python_list_info - Prints basic info about Python lists
 * @p: PyObject list
 */
void print_python_list_info(PyObject *p)
{
	int mass, locationc, j;
	PyObject *obj;

	mass = Py_SIZE(p);
	locationc = ((PyListObject *)p)->allocated;

	printf("[*] Size of the Python List = %d\n", mass);
	printf("[*] Allocated = %d\n", locationc);

	for (j = 0; j < mass; j++)
	{
		printf("Element %d: ", j);

		obj = PyList_GetItem(p, j);
		printf("%s\n", Py_TYPE(obj)->tp_name);
	}
}
