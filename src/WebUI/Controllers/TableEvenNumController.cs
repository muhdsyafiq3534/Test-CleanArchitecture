using CleanArchitecture.Application.Table.Model;
using CleanArchitecture.Application.Table.Query;
using Microsoft.AspNetCore.Mvc;

namespace CleanArchitecture.WebUI.Controllers;

//[Authorize]
public class TableEvenNumController : ApiControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<TableDtoVm>>> GetTableEven()
            => Ok(await Mediator.Send(new GetTableEvenNumQuery()));
}
