o = open("spa-eng.json", "w")
o.write("{")

with open("spa-eng.dict", "r") as i:
        line = i.readline()

        if line[-1] == "\\":
            o.write("\"" + line + "\":")

        if



o.write("}")
o.close()
