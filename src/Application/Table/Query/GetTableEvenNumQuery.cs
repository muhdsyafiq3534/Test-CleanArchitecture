using AutoMapper;
using CleanArchitecture.Application.Common.Interfaces;
using CleanArchitecture.Application.Table.Model;
using MediatR;

namespace CleanArchitecture.Application.Table.Query;
public class GetTableEvenNumQuery : IRequest<List<TableDtoVm>>
{
    class Handler : IRequestHandler<GetTableEvenNumQuery, List<TableDtoVm>>
    {
        private readonly IApplicationDbContext db;
        private readonly IMapper mapper;
        private readonly IIdentityService identityService;
        public Handler(IApplicationDbContext db, IMapper mapper, IIdentityService identityService)
        {
            this.db = db;
            this.mapper = mapper;
            this.identityService = identityService;
        }
        public async Task<List<TableDtoVm>> Handle(GetTableEvenNumQuery request, CancellationToken cancellationToken)
        {
            var obj = (from a in db.Table1
                       join b in db.Table2 on a.UserId equals b.UserId
                       join c in db.Table3 on b.Col_1 equals c.Col_1
                       select new TableDtoVm
                       {
                           UserId = a.UserId,
                           Surname = a.Surname,
                           GivenName = a.GivenName,
                           ContactNo = b.ContactNo,
                           Address = b.Address,
                           Col_1 = b.Col_1,
                           NoOfMember = c.NoOfMember,
                           ExpenseMonth1 = c.ExpenseMonth1,
                           ExpenseMonth2 = c.ExpenseMonth2,
                           ExpenseMonth3 = c.ExpenseMonth3,
                       })
                      .Where(x => x.UserId == 1 ||
                                   x.UserId == 3 ||
                                   x.UserId == 5 ||
                                   x.UserId == 7 ||
                                   x.UserId == 9 ||
                                   x.UserId == 11 ||
                                   x.UserId == 13 ||
                                   x.UserId == 15 ||
                                   x.UserId == 17 ||
                                   x.UserId == 19).ToList();

            Console.WriteLine(obj);
            return obj;
        }
    }
}
