using CleanArchitecture.Application.Table.Model;
using CleanArchitecture.Application.Table.Query;
using Microsoft.AspNetCore.Mvc;

namespace CleanArchitecture.WebUI.Controllers;

//[Authorize]
public class TableOddNumController : ApiControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<TableDtoVm>>> GetTableOdd()
    {
        return await Mediator.Send(new GetTableOddNumQuery());
    }
}
