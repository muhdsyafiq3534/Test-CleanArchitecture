using CleanArchitecture.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CleanArchitecture.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<Table1> Table1 { get; set; }
    DbSet<Table2> Table2 { get; set; }
    DbSet<Table3> Table3 { get; set; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
