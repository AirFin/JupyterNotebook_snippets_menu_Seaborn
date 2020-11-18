define([
    "require",
    "./python_regex",
], function (requirejs, python_regex) {
    return {
        'name' : 'Seaborn',
        'sub-menu' : [
            {
                'name' : 'Start',
                'snippet' : [
                						'import matplotlib.pyplot as plt',
                						'import matplotlib as mpl',
                            'import seaborn as sns',
                ],
            },
            {
                'name' : 'Documentation-zh',
                'external-link' : 'https://seaborn.apachecn.org/',
            },
            {
                'name' : 'GitHub',
                'external-link' : 'https://github.com/SharkFin-top/JupyterNotebook_snippets_menu_Seaborn',
            },
            '---',

            {
                'name' : 'Visualizing statistical relationships',
                'sub-menu' : [
                    {
                        'name' : 'replot scatter',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                                    '# hue=None, style=None, size=None,  markers color, style and size',
                                    '# palette=\"Set3\"  colors',
                                    '',
                        						'replot_scatter_test = sns.relplot(kind=\"scatter\", data=None, x=None, y=None, hue=None, style=None, size=None, sizes=(15, 200), row=None, col=None)',
                        ],
                    },
                    {
                        'name' : 'replot line',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						 '',
                        						'# estimator=None,  turn off aggregation altogether',
                        						'# hue=None, style=None, size=None,  lines color, style and size',
                        						'# palette=\"Set3\",  colors',
                        						'',
                        						'replot_scatter_test = sns.relplot(kind=\"line\", data=None, x=None, y=None, sort=True, ci=95, hue=None, style=None,size=None)',
                        ],
                    },
                 		
                ],
            },

            {
                'name' : 'Plotting with categorical data',
                'sub-menu' : [
                    {
                        'name' : 'catplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						 '',
                        						 '# kind = \"strip\"  swarm, box, violin, boxen, point, bar, count',
                        						 '',
                        						 'catplot_test = sns.catplot()',
                        						 
                        ],
                    },
                    {
                        'name' : 'stripplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# edgecolor=\"gray\"',
                        						'# jitter=True,   or 0.05',
                        						'# dodge=True,  seperate hue ',
                        						'# marker="D", size=20, ',
                        						'# order = [],',
                        						'',
                        						'stripplot_test = sns.stripplot(data=tips, x=None, y=None, hue=None, jitter=True, dodge=False)',
                        						 
                        ],
                    },
                    {
                        'name' : 'swarmplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# edgecolor=\"gray\"',
                        						'# jitter=True,   or 0.05',
                        						'# dodge=True,  seperate hue ',
                        						'# marker="D", size=20, ',
                        						'# order = [],',
                        						'',
                        						'swarmplot_test = sns.swarmplot(data=None, x=None, y=None, hue=None, jitter=True, dodge=False)',
                        						 
                        ],
                    },
                    '---',
                    {
                        'name' : 'boxplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# order = [],',
                        						'# dodge=True,  seperate hue ',
                        						'# notch=True,   special Median',
                        						'# fliersize=0.5  size of outliers',
                        						'',
                        						'boxplot_test = sns.boxplot(data=None, x=None, y=None, hue=None, orient=\"v\", dodge=False)',
                        						 
                        ],
                    },
                    {
                        'name' : 'violinplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# scale=\"count\"  area, count, width',
                        						'# order = [],',
                        						'# dodge=True,  seperate hue ',
                        						'# inner=\"box\"  box, quartile, point, stick, None',
                        						'# split=False',
                        						'# bw=.2',
                        						'',
                        						'violinplot_test = sns.violinplot(data=None, x=None, y=None, hue=None, orient=\"v\", dodge=False)',
                        						 
                        ],
                    },
                    {
                        'name' : 'boxenplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# order = [],',
                        						'# dodge=True,  seperate hue ',
                        						'# scale=\"exponential\"   area, linear, exponential   SORRY,IT IS HARD FOR ME TO EXPLAIN IT',
                        						'# k_depth=\"proportion\"  proportion, tukey, trustworthy  SORRY,IT IS HARD FOR ME TO EXPLAIN IT',
                        						'',
                        						'boxenplot_test = sns.boxenplot(data=None, x=None, y=None, hue=None, orient=\"v\", dodge=False)',
                        						 
                        ],
                    },
                    '---',
                    {
                        'name' : 'pointplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# order = [],',
                        						'# dodge=True,  seperate hue ',
                        						'# ci=None  float, sd, None',
                        						'',
                        						'pointplot_test = sns.pointplot(data=None, x=None, y=None, hue=None, markers=\"o\", linestyles=\"-\", orient=\"v\", dodge=False)',
                        						 
                        ],
                    },
                    {
                        'name' : 'barplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# order = [],',
                        						'# dodge=True,  seperate hue ',
                        						'# ci=None  float, sd, None',
                        						'# estimator=median',
                        						'',
                        						'barplot_test = sns.barplot(data=None, x=None, y=None, hue=None, capsize=.2, markers=\"o\", linestyles=\"-\", orient=\"v\", dodge=True)',
                        						 
                        ],
                    },
                    {
                        'name' : 'countplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# order = [],',
                        						'# dodge=True,  seperate hue ',
                        						'',
                        						'countplot_test = sns.countplot(data=None, x=None, y=None, hue=None, capsize=.2, orient=\"v\", dodge=True)',
                        						 
                        ],
                    },
                ],
            },
            
            {
                'name' : 'Visualizing the distribution of a dataset',
                'sub-menu' : [
                    {
                        'name' : 'distplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# order = [],',
                        						'# dodge=True,  seperate hue ',
                        						'',
                        						'distplot_test = sns.distplot(x, hist=True, kde=True, rug=False, vertical=False)',
                        						 
                        ],
                    },
                    {
                        'name' : 'kdeplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# order = [],',
                        						'# dodge=True,  seperate hue ',
                        						'# bw=.15',
                        						'',
                        						'kdeplot_test_one = sns.kdeplot(x, shade=False, vertical=False,)',
                        						'kdeplot_test_two = sns.kdeplot(x, y, shade=True ,n_levels=30, cmap="Blues",cbar=True)'
                        						 
                        ],
                    },
                    {
                        'name' : 'rugplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'rugplot_test = sns.rugplot(x, height=0.05, axis=\"x\")',
                        						 
                        ],
                    },
                    '---',
                    {
                        'name' : 'jointplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# kind=\"scatter\"  scatter, reg, resid, kde, hex',
                        						'jointplot_test = sns.jointplot(data=None, x=None, y=None, kind=\"scatter\")',
                        						 
                        ],
                    },
                    {
                        'name' : 'JointGrid',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'JointGrid_test = sns.JointGrid(data=None, x=None, y=None)',
                        						'JointGrid_test = JointGrid_test.plot_joint(sns.regplot)',
                        						'JointGrid_test = JointGrid_test.plot_marginals(sns.displot)',
                        						 
                        ],
                    },
                    '---',
                    {
                        'name' : 'pairplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# kind=\"scatter\",  scatter, reg',
                        						'# diag_kind=\"auto\",  auto, hist, kde',
                        						'vars=[],',
                        						'',
                        						'pairplot_test = sns.pairplot(data=None, hue=None, hue_order=None, markers=\"o\")',
                        						 
                        ],
                    },
                    {
                        'name' : 'PairGrid',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# vars=[]',
                        						'# x_vars=[]',
                        						'# y_vars=[]',
                        						
                        						'# Start',
                        						'PairGrid_test = sns.PairGrid(data=None, hue=None, hue_order=None,)',
                        						'# Way 1',
                        						'PairGrid_test = PairGrid_test.map(sns.regplot)  # every subplot',
                        						'# Way 2',
                        						'PairGrid_test = PairGrid_test.map_diag(sns.displot)  # every diag plot',
                        						'PairGrid_test = PairGrid_test.map_offdiag(sns.regplot)  # every not diag plot',
                        						'# Way 3',
                        						'PairGrid_test = PairGrid_test.map_diag(sns.displot)  # every diag plot',
                        						'PairGrid_test = PairGrid_test.map_lower(sns.kdeplot)  # every lower plot',
                        						'PairGrid_test = PairGrid_test.map_upper(sns.regplot)  # every upper plot',
                        						'',
                        						'# add legend',
                        						'PairGrid_test = PairGrid_test.add_legend()',
                        						 
                        ],
                    },
                ],
            },
            
            {
                'name' : 'Visualizing linear relationships',
                'sub-menu' : [
                    {
                        'name' : 'regplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# edgecolor=\"gray\"',
                        						'',
                        						'regplot_test = sns.regplot(data=None, x=None, y=None, order=1, robust=False, ci=95, markers=\"o\")',
                        						 
                        ],
                    },
                    {
                        'name' : 'lmplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# edgecolor=\"gray\"',
                        						'',
                        						'lmplot_test = sns.lmplot(data=None, x=None, y=None, hue=None, col=None, row=None, order=1, robust=False,ci=95, marker=\"o\")',
                        						 
                        ],
                    },
                    {
                        'name' : 'residplot',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# palette=\"Set3\",  colors',
                        						'# edgecolor=\"gray\"',
                        						'',
                        						'residplot_test = sns.residplot(data=tips, x=None, y=None, hue=None, order=1, robust=False,)',
                        						 
                        ],
                    },
                ],
            },
            {
                'name' : 'Building structured multi-plot grids',
                'sub-menu' : [
                    {
                        'name' : 'FacetGrid',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'FacetGrid_test = sns.FacetGrid(data=None)',
                        						'FacetGrid_test = FacetGrid_test.map()',
                        						 
                        ],
                    },
                ],
            },
            {
                'name' : 'Other Plots',
                'sub-menu' : [
                    {
                        'name' : 'heatmap',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'heatmap_test = sns.heatmap(data=None, cmap="YlGnBu", annot=None,linewidths=.5)',
                        						 
                        ],
                    },
                    {
                        'name' : 'clustermap',
                        'snippet' : [
                        						'sns.set(font_scale=1.5, font=\"SimHei\")',
                        						'sns.set_style(\"darkgrid\")  # , whitegrid, dark, white, ticks',
                        						'# sns.despine()  remove the top and right axes spines',
                        						'plt.figure(figsize=(20, 10))  # or  fig.set_size_inches(20, 10)  or  XXX.fig.set_size_inches(20, 10)',
                        						'',
                        						'# IT IS HARD FOR ME TO EXPLAIN IT, SORRY',
                        						'clustermap_test = sns.clustermap(data=None)',
                        						 
                        ],
                    },
                ],
            },
        ],
    };
});
