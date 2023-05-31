using CleanArchitecture.Application.Table.Model;
using CleanArchitecture.Application.Table.Query;
using Microsoft.AspNetCore.Mvc;

namespace CleanArchitecture.WebUI.Controllers;

//[Authorize]
public class TableAllDataController : ApiControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<TableDtoVm>>> GetTableData()
            => Ok(await Mediator.Send(new GetTableAllDataQuery()));
}
