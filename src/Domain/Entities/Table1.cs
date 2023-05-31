using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CleanArchitecture.Domain.Entities;
public class Table1
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string Surname { get; set; }
    public string GivenName { get; set; }
}
