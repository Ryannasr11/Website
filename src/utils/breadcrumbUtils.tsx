import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, Theme } from '@material-ui/core/styles';
import ChevronRight from '@material-ui/icons/ChevronRight';

const styles = (theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px 0',
        margin: '0 20px',
        height: '1em',
    },
    breadcrumb: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 0 0 5px',
        color: '#65656c',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    link: {
        color: '#65656c',
        textDecoration: 'none',
    },
});

export interface AcBreadcrumbUtilProps {
    location?: LocationProps;
    breadcrumbs: BreadcrumbProps;
    home: string;
    defaultLink: string;
    classes?: ClassesProps;
}

export interface LocationProps {
    pathname: PathnameProps;
}

export interface PathnameProps {
    includes: () => void;
}

export interface BreadcrumbProps {
    [key: string]: BreadcrumbPathProps;
}

export interface BreadcrumbPathProps {
    path: string;
    title: string;
    breadcrumbs?: BreadcrumbProps;
}

export interface ClassesProps {
    [key: string]: string;
}

const AcBreadcrumbs: React.FC<AcBreadcrumbUtilProps> = ({ location, classes, breadcrumbs, home, defaultLink }) => {
    // helper method to build out paths recursively
    const buildBreadcrumbs: any = (
        foundBreadcrumbs: BreadcrumbPathProps[] = [],
        currentBreadcrumbs: BreadcrumbPathProps,
    ) => {
        let foundBreadcrumb: BreadcrumbPathProps | undefined;

        // iterate through the current breadcrumbs to see if we can go deeper in the path
        Object.keys(currentBreadcrumbs).forEach((path) => {
            // bounce out if we're not going down the right path
            if (!window.location.href.includes(path)) return;

            foundBreadcrumb = currentBreadcrumbs[path];
        });

        // bounce out if we don't have a breadcrumb
        if (!foundBreadcrumb) return foundBreadcrumbs;

        // add this breadcrumb to the path
        foundBreadcrumbs.push(foundBreadcrumb);

        // if we have children breadcrumbs then continue recursively
        if (foundBreadcrumb.breadcrumbs) return buildBreadcrumbs(foundBreadcrumbs, foundBreadcrumb.breadcrumbs);

        return foundBreadcrumbs;
    };

    // find breadcrumbs based on the path
    const foundBreadcrumbs = buildBreadcrumbs([], breadcrumbs);
    return (
        <div className={classes?.root}>
            <div className={classes?.breadcrumb}>
                <Link to={defaultLink} className={classes?.link}>
                    {home}
                </Link>
            </div>
            {foundBreadcrumbs.map((breadcrumb: BreadcrumbPathProps, i: number) => {
                const last = i + 1 === foundBreadcrumbs.length;
                return (
                    <div key={i} className={classes?.breadcrumb}>
                        <ChevronRight />
                        {last === true ? (
                            breadcrumb.title
                        ) : (
                            <Link to={breadcrumb.path} className={classes?.link}>
                                {breadcrumb.title}
                            </Link>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

AcBreadcrumbs.defaultProps = {
    breadcrumbs: {},
    classes: {},
    location: {
        pathname: {
            includes() {
                /**/
            },
        },
    }, // use react-router
    defaultLink: '/',
};

export default withStyles(styles)(AcBreadcrumbs);
