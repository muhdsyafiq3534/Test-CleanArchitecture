using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CleanArchitecture.Application.Table.Model;
public class TableDto
{
    public List<TableDtoVm> Tables { get; set; }
}

public class TableDtoVm
{
    public int UserId { get; set; }
    public string Surname { get; set; }
    public string GivenName { get; set; }
    public string ContactNo { get; set; }
    public string Address { get; set; }
    public string Col_1 { get; set; }
    public int NoOfMember { get; set; }
    public string ExpenseMonth1 { get; set; }
    public string ExpenseMonth2 { get; set; }
    public string ExpenseMonth3 { get; set; }
}

