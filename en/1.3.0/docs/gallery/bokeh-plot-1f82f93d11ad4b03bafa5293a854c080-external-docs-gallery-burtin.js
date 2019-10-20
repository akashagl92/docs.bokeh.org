(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("0bbb5f0a-5bde-49e6-8e35-60d15d7f774c");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '0bbb5f0a-5bde-49e6-8e35-60d15d7f774c' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
      var css_urls = [];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"c0349378-a2c7-4944-91f3-359640e79922":{"roots":{"references":[{"attributes":{"data_source":{"id":"2756","type":"ColumnDataSource"},"glyph":{"id":"2757","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2758","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"2760","type":"CDSView"}},"id":"2759","type":"GlyphRenderer"},{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2788","type":"Text"},{"attributes":{"data_source":{"id":"2791","type":"ColumnDataSource"},"glyph":{"id":"2792","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2793","type":"Circle"},"selection_glyph":null,"view":{"id":"2795","type":"CDSView"}},"id":"2794","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2756","type":"ColumnDataSource"}},"id":"2760","type":"CDSView"},{"attributes":{"data_source":{"id":"2766","type":"ColumnDataSource"},"glyph":{"id":"2767","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2768","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"2770","type":"CDSView"}},"id":"2769","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2776","type":"ColumnDataSource"},"glyph":{"id":"2777","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2778","type":"Text"},"selection_glyph":null,"view":{"id":"2780","type":"CDSView"}},"id":"2779","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2771","type":"ColumnDataSource"},"glyph":{"id":"2772","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2773","type":"Circle"},"selection_glyph":null,"view":{"id":"2775","type":"CDSView"}},"id":"2774","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"radius":{"__ndarray__":"AAAAAAAgckDHcwaqNPVtQDjj0CUzIWlABsmM1zIPZUCg0sRXLXlhQBRFOMxxdlxAAAAAAACAVkA=","dtype":"float64","shape":[7]}},"selected":{"id":"2822","type":"Selection"},"selection_policy":{"id":"2821","type":"UnionRenderers"}},"id":"2771","type":"ColumnDataSource"},{"attributes":{},"id":"2833","type":"UnionRenderers"},{"attributes":{},"id":"2815","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"2751","type":"ColumnDataSource"},"glyph":{"id":"2752","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2753","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"2755","type":"CDSView"}},"id":"2754","type":"GlyphRenderer"},{"attributes":{},"id":"2836","type":"Selection"},{"attributes":{"callback":null,"data":{"fill_color":["#e69584","#aeaeb8"],"line_color":["#e69584","#aeaeb8"],"x":[-40,-40],"y":[-370,-390]},"selected":{"id":"2830","type":"Selection"},"selection_policy":{"id":"2829","type":"UnionRenderers"}},"id":"2791","type":"ColumnDataSource"},{"attributes":{},"id":"2817","type":"UnionRenderers"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"2778","type":"Text"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2798","type":"Text"},{"attributes":{},"id":"2821","type":"UnionRenderers"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"2730","type":"Range1d"},{"attributes":{},"id":"2814","type":"Selection"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"2768","type":"AnnularWedge"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"2732","type":"Range1d"},{"attributes":{"data_source":{"id":"2761","type":"ColumnDataSource"},"glyph":{"id":"2762","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2763","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"2765","type":"CDSView"}},"id":"2764","type":"GlyphRenderer"},{"attributes":{"background_fill_color":{"value":"#f0e1d2"},"min_border":0,"outline_line_color":{"value":"black"},"plot_height":800,"plot_width":800,"renderers":[{"id":"2754","type":"GlyphRenderer"},{"id":"2759","type":"GlyphRenderer"},{"id":"2764","type":"GlyphRenderer"},{"id":"2769","type":"GlyphRenderer"},{"id":"2774","type":"GlyphRenderer"},{"id":"2779","type":"GlyphRenderer"},{"id":"2784","type":"GlyphRenderer"},{"id":"2789","type":"GlyphRenderer"},{"id":"2794","type":"GlyphRenderer"},{"id":"2799","type":"GlyphRenderer"},{"id":"2804","type":"GlyphRenderer"},{"id":"2809","type":"GlyphRenderer"}],"title":{"id":"2728","type":"Title"},"toolbar":{"id":"2744","type":"Toolbar"},"x_range":{"id":"2730","type":"Range1d"},"x_scale":{"id":"2734","type":"LinearScale"},"y_range":{"id":"2732","type":"Range1d"},"y_scale":{"id":"2736","type":"LinearScale"}},"id":"2727","subtype":"Figure","type":"Plot"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"2758","type":"AnnularWedge"},{"attributes":{"source":{"id":"2776","type":"ColumnDataSource"}},"id":"2780","type":"CDSView"},{"attributes":{},"id":"2822","type":"Selection"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"2753","type":"AnnularWedge"},{"attributes":{"source":{"id":"2761","type":"ColumnDataSource"}},"id":"2765","type":"CDSView"},{"attributes":{},"id":"2827","type":"UnionRenderers"},{"attributes":{},"id":"2736","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"white"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"2772","type":"Circle"},{"attributes":{},"id":"2734","type":"LinearScale"},{"attributes":{"source":{"id":"2771","type":"ColumnDataSource"}},"id":"2775","type":"CDSView"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"juv/7wot9j95aHcnKkPwP8nK3b2SsuQ/QImZWaK90T9QDCIig6e3v2iPqupjkd2/3E1mhnOc6r8EqruLGjjzvxgtRFT7Ifm/LLDMHNwL/7+hmapy3noCwCvb7tbObwXAtRwzO79kCMA/Xnefr1kLwMufuwOgTg7AqvD/M8ihEMA=","dtype":"float64","shape":[16]},"fill_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"line_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"start_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]}},"selected":{"id":"2814","type":"Selection"},"selection_policy":{"id":"2813","type":"UnionRenderers"}},"id":"2751","type":"ColumnDataSource"},{"attributes":{},"id":"2738","type":"PanTool"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":90},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"2767","type":"AnnularWedge"},{"attributes":{"callback":null,"data":{"text":["Gram-negative","Gram-positive"],"x":[-30,-30],"y":[-370,-390]},"selected":{"id":"2832","type":"Selection"},"selection_policy":{"id":"2831","type":"UnionRenderers"}},"id":"2796","type":"ColumnDataSource"},{"attributes":{},"id":"2826","type":"Selection"},{"attributes":{},"id":"2739","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"2812","type":"BoxAnnotation"}},"id":"2740","type":"BoxZoomTool"},{"attributes":{"callback":null,"data":{"fill_color":["#0d3362","#c64737","black"],"line_color":["#0d3362","#c64737","black"],"x":[-40,-40,-40],"y":[18,0,-18]},"selected":{"id":"2834","type":"Selection"},"selection_policy":{"id":"2833","type":"UnionRenderers"}},"id":"2801","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"2728","type":"Title"},{"attributes":{},"id":"2823","type":"UnionRenderers"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"2763","type":"AnnularWedge"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"2793","type":"Circle"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"field":"fill_color"},"inner_radius":{"units":"data","value":90},"line_color":{"field":"line_color"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"2752","type":"AnnularWedge"},{"attributes":{},"id":"2824","type":"Selection"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2808","type":"Text"},{"attributes":{},"id":"2832","type":"Selection"},{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2787","type":"Text"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"2777","type":"Text"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":13},"line_color":{"field":"line_color"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"2802","type":"Rect"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#0d3362"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#0d3362"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"2757","type":"AnnularWedge"},{"attributes":{},"id":"2835","type":"UnionRenderers"},{"attributes":{},"id":"2834","type":"Selection"},{"attributes":{"callback":null,"data":{"text":["Penicillin","Streptomycin","Neomycin"],"x":[-15,-15,-15],"y":[18,0,-18]},"selected":{"id":"2836","type":"Selection"},"selection_policy":{"id":"2835","type":"UnionRenderers"}},"id":"2806","type":"ColumnDataSource"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2797","type":"Text"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c64737"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#c64737"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"2762","type":"AnnularWedge"},{"attributes":{},"id":"2829","type":"UnionRenderers"},{"attributes":{"source":{"id":"2806","type":"ColumnDataSource"}},"id":"2810","type":"CDSView"},{"attributes":{},"id":"2831","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"2738","type":"PanTool"},{"id":"2739","type":"WheelZoomTool"},{"id":"2740","type":"BoxZoomTool"},{"id":"2741","type":"SaveTool"},{"id":"2742","type":"ResetTool"},{"id":"2743","type":"HelpTool"}]},"id":"2744","type":"Toolbar"},{"attributes":{},"id":"2830","type":"Selection"},{"attributes":{"source":{"id":"2791","type":"ColumnDataSource"}},"id":"2795","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"2773","type":"Circle"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":80},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"2782","type":"AnnularWedge"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"yERVhbPz8T9mg5l5pRPoP3v6ENHHf9g/KMXd3ZUIiz8rHjNzPs/Wv0CVqspgO+e/tM3dLZGH8b/KUGb2cXH3v97T7r5SW/2/eKu7w5miAcAD7f8nipcEwI0uRIx6jAfAF3CI8GqBCsChscxUW3YNwJd5iNylNRDAW5qqDh6wEcA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"m8z7btjvY0D9PDy5w1RpQDjj0CUzIWlABsmM1zIPZUChS31Y0mVsQB0YCXI1nGZAOOPQJTMhaUCyh+QAGnxuQM3Wg944S2RA/HdeznjObkA449AlMyFpQAAAAAAAIHJAAAAAAAAgckCg0sRXLXlhQFhbROgM+V5AoNLEVy15YUA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"oVZm1m4b8T8Xp7sbHGPmP91BVRW1HtU/p1NmZnBGpL/J1u4uUTDav49xiCjq6+i/27vM3NVf8r/xPlWltkn4vwXC3W2XM/6/jCIzG7wOAsAXZHd/rAMFwKGlu+Oc+AfAK+f/R43tCsC1KESsfeINwCE1RAi3axDA5VVmOi/mEcA=","dtype":"float64","shape":[16]}},"selected":{"id":"2820","type":"Selection"},"selection_policy":{"id":"2819","type":"UnionRenderers"}},"id":"2766","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2806","type":"ColumnDataSource"},"glyph":{"id":"2807","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2808","type":"Text"},"selection_glyph":null,"view":{"id":"2810","type":"CDSView"}},"id":"2809","type":"GlyphRenderer"},{"attributes":{},"id":"2742","type":"ResetTool"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"FyEz4zyk8z8EPFU1uHTrP7hriEjtQd8/ln2Zmahpvj/urLv7GA3Qv6Lc7g5O2uO/yuL/nw+u7797dIiY6MD1v4/3EGHJqvu/Ub3MFFXKAMDc/hB5Rb8DwGZAVd01tAbA8IGZQSapCcB6w92lFp4MwAcFIgoHkw/ARyMzt/tDEcA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"pmlXNAGDYkDWwF0C/m1lQDjj0CUzIWlAZ+OHhpjCZECbzPtu2O9jQJvM+27Y72NAHRgJcjWcZkAdGAlyNZxmQAbJjNcyD2VAx3MGqjT1bUAGyYzXMg9lQIaiNChEiGtAOOPQJTMhaUDoDDhWBvtgQKDSxFcteWFASjEX/kFVYUA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"8DJENPjL8j+1X3fXLsTpPxqzzIza4Ns/Hpuqql3lsD+MZXe3K27Tv/G4zGzXiuW/jN/ufkyv8L+iYndHLZn2v7bl/w8Og/y/ZTREbHc2AcDwdYjQZysEwHq3zDRYIAfABPkQmUgVCsCOOlX9OAoNwBt8mWEp/w/A0d7u4gx6EcA=","dtype":"float64","shape":[16]}},"selected":{"id":"2818","type":"Selection"},"selection_policy":{"id":"2817","type":"UnionRenderers"}},"id":"2761","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":80},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"2783","type":"AnnularWedge"},{"attributes":{},"id":"2743","type":"HelpTool"},{"attributes":{"source":{"id":"2766","type":"ColumnDataSource"}},"id":"2770","type":"CDSView"},{"attributes":{},"id":"2828","type":"Selection"},{"attributes":{"data_source":{"id":"2801","type":"ColumnDataSource"},"glyph":{"id":"2802","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2803","type":"Rect"},"selection_glyph":null,"view":{"id":"2805","type":"CDSView"}},"id":"2804","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"text":["0.001","0.01","0.1","1.0","10.0","100.0"],"y":{"__ndarray__":"AAAAAAAgckDHcwaqNPVtQDjj0CUzIWlABsmM1zIPZUCg0sRXLXlhQBRFOMxxdlxA","dtype":"float64","shape":[6]}},"selected":{"id":"2824","type":"Selection"},"selection_policy":{"id":"2823","type":"UnionRenderers"}},"id":"2776","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2781","type":"ColumnDataSource"}},"id":"2785","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":13},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"2803","type":"Rect"},{"attributes":{},"id":"2741","type":"SaveTool"},{"attributes":{"data_source":{"id":"2786","type":"ColumnDataSource"},"glyph":{"id":"2787","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2788","type":"Text"},"selection_glyph":null,"view":{"id":"2790","type":"CDSView"}},"id":"2789","type":"GlyphRenderer"},{"attributes":{},"id":"2818","type":"Selection"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]}},"selected":{"id":"2826","type":"Selection"},"selection_policy":{"id":"2825","type":"UnionRenderers"}},"id":"2781","type":"ColumnDataSource"},{"attributes":{"source":{"id":"2801","type":"ColumnDataSource"}},"id":"2805","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2812","type":"BoxAnnotation"},{"attributes":{},"id":"2813","type":"UnionRenderers"},{"attributes":{"source":{"id":"2786","type":"ColumnDataSource"}},"id":"2790","type":"CDSView"},{"attributes":{"source":{"id":"2796","type":"ColumnDataSource"}},"id":"2800","type":"CDSView"},{"attributes":{"data_source":{"id":"2796","type":"ColumnDataSource"},"glyph":{"id":"2797","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2798","type":"Text"},"selection_glyph":null,"view":{"id":"2800","type":"CDSView"}},"id":"2799","type":"GlyphRenderer"},{"attributes":{"source":{"id":"2751","type":"ColumnDataSource"}},"id":"2755","type":"CDSView"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2807","type":"Text"},{"attributes":{},"id":"2816","type":"Selection"},{"attributes":{"data_source":{"id":"2781","type":"ColumnDataSource"},"glyph":{"id":"2782","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2783","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"2785","type":"CDSView"}},"id":"2784","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"Zv0QQcZU9T+i9BDxytXuP3ru/18JAuM/RKG7Ox+5zD9kd4gI55XCvwQkM1M7eeC/LCpE5PxM7L8smKo6XxD0v0AbMwNA+vm/U567yyDk/7+0ECLKAOcCwD5SZi7x2wXAyJOqkuHQCMBS1e720cULwN8WM1vCug7ANKy7X9nXEMA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"bLZfBPAOV0Cg0sRXLXlhQDLrDr5nTGNA1FIAQwHoVkAGyYzXMg9lQNRSAEMB6FZAFEU4zHF2XEAGyYzXMg9lQHi2fdUW2VZAAAAAAAAgckAGyYzXMg9lQIaiNChEiGtA/HdeznjObkAAAAAAACByQKYExgH2o29ApgTGAfajb0A=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"Pw8ikoF89D9UGDOTQSXtPysSIgKAUeE/CDBExPn2xT+g6P9/DFjJv1IAEbHEKeK/egYiQob97b9Thpnpo+j0v2cJIrKE0vq/PUZVvTJeAMDIh5khI1MDwFLJ3YUTSAbA3Aoi6gM9CcBmTGZO9DEMwPONqrLkJg/Avmd3i+oNEcA=","dtype":"float64","shape":[16]}},"selected":{"id":"2816","type":"Selection"},"selection_policy":{"id":"2815","type":"UnionRenderers"}},"id":"2756","type":"ColumnDataSource"},{"attributes":{},"id":"2825","type":"UnionRenderers"},{"attributes":{},"id":"2819","type":"UnionRenderers"},{"attributes":{},"id":"2820","type":"Selection"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"2792","type":"Circle"},{"attributes":{"callback":null,"data":{"angle":{"__ndarray__":"BKq7ixo48z/dTWaGc5zqP2iPqupjkd0/WgwiIoOntz8+iZlZor3Rv8nK3b2SsuS/eGh3JypD8L+O6//vCi32v47r/+8KLfY/emh3JypD8D/Iyt29krLkP0CJmVmivdE/QAwiIoOnt79gj6rqY5Hdv+BNZoZznOq/BKq7ixo4878=","dtype":"float64","shape":[16]},"text":["Mycobacterium tuberculosis","Salmonella schottmuelleri","Proteus vulgaris","Klebsiella pneumoniae","Brucella abortus","Pseudomonas aeruginosa","Escherichia coli","Salmonella (Eberthella) typhosa","Aerobacter aerogenes","Brucella antracis","Streptococcus fecalis","Staphylococcus aureus","Staphylococcus albus","Streptococcus hemolyticus","Streptococcus viridans","Diplococcus pneumoniae"],"x":{"__ndarray__":"cGn7M6UwWkAzVkZE5WtoQKq2lcOOOXBAjuBL4jQMckDOGdT43m5xQMF6BpGZ7WxA7SBXXEoVY0AXTcs3yKRKQBFNyzfIpErA6CBXXEoVY8DBegaRme1swM4Z1PjebnHAj+BL4jQMcsCrtpXDjjlwwDJWRkTla2jAcmn7M6UwWsA=","dtype":"float64","shape":[16]},"y":{"__ndarray__":"aywf0KvmcEAmrFe0AMpqQKfycbJzKGBAv6EJxQDCOkC6LG9iL9dTwNZbjg1z2GXAdpVS2APSbsAYUkjE/tBxwBhSSMT+0HHAepVS2APSbsDWW44Nc9hlwL8sb2Iv11PAmaEJxQDCOkCi8nGycyhgQCesV7QAympAaywf0KvmcEA=","dtype":"float64","shape":[16]}},"selected":{"id":"2828","type":"Selection"},"selection_policy":{"id":"2827","type":"UnionRenderers"}},"id":"2786","type":"ColumnDataSource"}],"root_ids":["2727"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"c0349378-a2c7-4944-91f3-359640e79922","roots":{"2727":"0bbb5f0a-5bde-49e6-8e35-60d15d7f774c"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();