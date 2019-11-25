function getDomain(path) {
  // Are there any slashes (>= 0)?
  const slash = path.indexOf('/');

  if (slash >= 0) {
    // Slash exists

    const firstSlash = path.indexOf('/');
    let startPos;
    if (firstSlash > 0) {
      // Path does not start with slash
      startPos = 0;
    } else {
      // Path starts with slash
      startPos = firstSlash + 1;
    }

    const secondSlash = path.indexOf('/', startPos);
    let endPos;
    if (secondSlash > -1) {
      // Second slash exists
      endPos = path.indexOf('/', startPos);
      return path.substring(startPos, endPos);
    }

    // Second slash does not exist
    return path.substring(startPos);
  }

  // No slash, so return as-is
  return path;
}

function getDomainPages(domain, allPages) {
  const pages = [];

  // Get domain of current page
  const thisDomain = domain;

  // Get other pages in the same domain
  const sitePages = allPages;
  sitePages.forEach((page) => {
    const thatDomain = getDomain(page.path);
    if (thatDomain === thisDomain) {
      pages.push(page);
    }
  });

  // Sort the pages
  pages.sort((a, b) => {
    // First compare the length of the paths
    if (a.path.length < b.path.length) {
      return -1;
    }
    if (a.path.length > b.path.length) {
      return 1;
    }

    // If the lengths are the same, then compare the values themselves (alphabetically)
    if (a.path < b.path) {
      return -1;
    }
    if (a.path > b.path) {
      return 1;
    }

    // Otherwise they are the same
    return 0;
  });

  return pages;
}

export default { getDomain, getDomainPages };
