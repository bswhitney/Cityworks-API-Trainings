using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Examples
{
    class KeyValuePair<T1, T2>
    {
        public KeyValuePair(T1 key, T2 value)
        {
            Key = key;
            Value = value;
        }
        public T1 Key { get; set; }
        public T2 Value { get; set; }


        public override string ToString()
        {
            return Value.ToString();
        }
    }
}
