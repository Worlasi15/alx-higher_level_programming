#!/usr/bin/python3

def append_write(filename="", text=""):
    """function that appends a string at the end of a text file.

    Args:
        filename (str): The name of the file to append to.
        text (str): The string that appends the file.
    Returns:
        The number of characters appended.
    """
    with open(filename, "a", encoding="utf-8") as f:
        return f.write(text)
