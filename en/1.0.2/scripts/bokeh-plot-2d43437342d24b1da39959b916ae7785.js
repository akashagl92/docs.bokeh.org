(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("8ffbe15a-bdea-463b-b788-74bb45f3406b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8ffbe15a-bdea-463b-b788-74bb45f3406b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"c9c74c74-c8e4-4efd-a814-67a414c55b68":{"roots":{"references":[{"attributes":{},"id":"26318","type":"Selection"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#c64737"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#c64737"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"26252","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"26246","type":"ColumnDataSource"},"glyph":{"id":"26247","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26248","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"26250","type":"CDSView"}},"id":"26249","type":"GlyphRenderer"},{"attributes":{"source":{"id":"26276","type":"ColumnDataSource"}},"id":"26280","type":"CDSView"},{"attributes":{"callback":null,"data":{"radius":{"__ndarray__":"AAAAAAAgckDHcwaqNPVtQDjj0CUzIWlABsmM1zIPZUCg0sRXLXlhQBRFOMxxdlxAAAAAAACAVkA=","dtype":"float64","shape":[7]}},"selected":{"id":"26312","type":"Selection"},"selection_policy":{"id":"26311","type":"UnionRenderers"}},"id":"26261","type":"ColumnDataSource"},{"attributes":{},"id":"26319","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"white"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"26262","type":"Circle"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"26282","type":"Circle"},{"attributes":{"source":{"id":"26246","type":"ColumnDataSource"}},"id":"26250","type":"CDSView"},{"attributes":{},"id":"26320","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"26283","type":"Circle"},{"attributes":{},"id":"26321","type":"UnionRenderers"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":90},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"26257","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"26281","type":"ColumnDataSource"},"glyph":{"id":"26282","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26283","type":"Circle"},"selection_glyph":null,"view":{"id":"26285","type":"CDSView"}},"id":"26284","type":"GlyphRenderer"},{"attributes":{},"id":"26322","type":"Selection"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"26258","type":"AnnularWedge"},{"attributes":{"source":{"id":"26281","type":"ColumnDataSource"}},"id":"26285","type":"CDSView"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"FyEz4zyk8z8EPFU1uHTrP7hriEjtQd8/ln2Zmahpvj/urLv7GA3Qv6Lc7g5O2uO/yuL/nw+u7797dIiY6MD1v4/3EGHJqvu/Ub3MFFXKAMDc/hB5Rb8DwGZAVd01tAbA8IGZQSapCcB6w92lFp4MwAcFIgoHkw/ARyMzt/tDEcA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"pmlXNAGDYkDWwF0C/m1lQDjj0CUzIWlAZ+OHhpjCZECbzPtu2O9jQJvM+27Y72NAHRgJcjWcZkAdGAlyNZxmQAbJjNcyD2VAx3MGqjT1bUAGyYzXMg9lQIaiNChEiGtAOOPQJTMhaUDoDDhWBvtgQKDSxFcteWFASjEX/kFVYUA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"8DJENPjL8j+1X3fXLsTpPxqzzIza4Ns/Hpuqql3lsD+MZXe3K27Tv/G4zGzXiuW/jN/ufkyv8L+iYndHLZn2v7bl/w8Og/y/ZTREbHc2AcDwdYjQZysEwHq3zDRYIAfABPkQmUgVCsCOOlX9OAoNwBt8mWEp/w/A0d7u4gx6EcA=","dtype":"float64","shape":[16]}},"selected":{"id":"26308","type":"Selection"},"selection_policy":{"id":"26307","type":"UnionRenderers"}},"id":"26251","type":"ColumnDataSource"},{"attributes":{},"id":"26323","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"26256","type":"ColumnDataSource"},"glyph":{"id":"26257","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26258","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"26260","type":"CDSView"}},"id":"26259","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"text":["Gram-negative","Gram-positive"],"x":[-30,-30],"y":[-370,-390]},"selected":{"id":"26322","type":"Selection"},"selection_policy":{"id":"26321","type":"UnionRenderers"}},"id":"26286","type":"ColumnDataSource"},{"attributes":{},"id":"26324","type":"Selection"},{"attributes":{"source":{"id":"26256","type":"ColumnDataSource"}},"id":"26260","type":"CDSView"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26287","type":"Text"},{"attributes":{"data_source":{"id":"26241","type":"ColumnDataSource"},"glyph":{"id":"26242","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26243","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"26245","type":"CDSView"}},"id":"26244","type":"GlyphRenderer"},{"attributes":{},"id":"26325","type":"UnionRenderers"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"7pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26288","type":"Text"},{"attributes":{},"id":"26326","type":"Selection"},{"attributes":{"callback":null,"data":{"fill_color":["#e69584","#aeaeb8"],"line_color":["#e69584","#aeaeb8"],"x":[-40,-40],"y":[-370,-390]},"selected":{"id":"26320","type":"Selection"},"selection_policy":{"id":"26319","type":"UnionRenderers"}},"id":"26281","type":"ColumnDataSource"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"26253","type":"AnnularWedge"},{"attributes":{"data_source":{"id":"26286","type":"ColumnDataSource"},"glyph":{"id":"26287","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26288","type":"Text"},"selection_glyph":null,"view":{"id":"26290","type":"CDSView"}},"id":"26289","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"26251","type":"ColumnDataSource"},"glyph":{"id":"26252","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26253","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"26255","type":"CDSView"}},"id":"26254","type":"GlyphRenderer"},{"attributes":{"source":{"id":"26286","type":"ColumnDataSource"}},"id":"26290","type":"CDSView"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"26243","type":"AnnularWedge"},{"attributes":{"source":{"id":"26251","type":"ColumnDataSource"}},"id":"26255","type":"CDSView"},{"attributes":{"callback":null,"data":{"fill_color":["#0d3362","#c64737","black"],"line_color":["#0d3362","#c64737","black"],"x":[-40,-40,-40],"y":[18,0,-18]},"selected":{"id":"26324","type":"Selection"},"selection_policy":{"id":"26323","type":"UnionRenderers"}},"id":"26291","type":"ColumnDataSource"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":13},"line_color":{"field":"line_color"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"26292","type":"Rect"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"yERVhbPz8T9mg5l5pRPoP3v6ENHHf9g/KMXd3ZUIiz8rHjNzPs/Wv0CVqspgO+e/tM3dLZGH8b/KUGb2cXH3v97T7r5SW/2/eKu7w5miAcAD7f8nipcEwI0uRIx6jAfAF3CI8GqBCsChscxUW3YNwJd5iNylNRDAW5qqDh6wEcA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"m8z7btjvY0D9PDy5w1RpQDjj0CUzIWlABsmM1zIPZUChS31Y0mVsQB0YCXI1nGZAOOPQJTMhaUCyh+QAGnxuQM3Wg944S2RA/HdeznjObkA449AlMyFpQAAAAAAAIHJAAAAAAAAgckCg0sRXLXlhQFhbROgM+V5AoNLEVy15YUA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"oVZm1m4b8T8Xp7sbHGPmP91BVRW1HtU/p1NmZnBGpL/J1u4uUTDav49xiCjq6+i/27vM3NVf8r/xPlWltkn4vwXC3W2XM/6/jCIzG7wOAsAXZHd/rAMFwKGlu+Oc+AfAK+f/R43tCsC1KESsfeINwCE1RAi3axDA5VVmOi/mEcA=","dtype":"float64","shape":[16]}},"selected":{"id":"26310","type":"Selection"},"selection_policy":{"id":"26309","type":"UnionRenderers"}},"id":"26256","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"26234","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":13},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"26293","type":"Rect"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"26226","type":"PanTool"},{"id":"26227","type":"WheelZoomTool"},{"id":"26228","type":"BoxZoomTool"},{"id":"26229","type":"SaveTool"},{"id":"26230","type":"ResetTool"},{"id":"26231","type":"HelpTool"}]},"id":"26232","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"field":"radius","units":"data"},"x":{"value":0},"y":{"value":0}},"id":"26263","type":"Circle"},{"attributes":{"data_source":{"id":"26291","type":"ColumnDataSource"},"glyph":{"id":"26292","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26293","type":"Rect"},"selection_glyph":null,"view":{"id":"26295","type":"CDSView"}},"id":"26294","type":"GlyphRenderer"},{"attributes":{"source":{"id":"26261","type":"ColumnDataSource"}},"id":"26265","type":"CDSView"},{"attributes":{},"id":"26231","type":"HelpTool"},{"attributes":{"source":{"id":"26291","type":"ColumnDataSource"}},"id":"26295","type":"CDSView"},{"attributes":{"data_source":{"id":"26261","type":"ColumnDataSource"},"glyph":{"id":"26262","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26263","type":"Circle"},"selection_glyph":null,"view":{"id":"26265","type":"CDSView"}},"id":"26264","type":"GlyphRenderer"},{"attributes":{},"id":"26230","type":"ResetTool"},{"attributes":{"callback":null,"data":{"text":["Penicillin","Streptomycin","Neomycin"],"x":[-15,-15,-15],"y":[18,0,-18]},"selected":{"id":"26326","type":"Selection"},"selection_policy":{"id":"26325","type":"UnionRenderers"}},"id":"26296","type":"ColumnDataSource"},{"attributes":{},"id":"26229","type":"SaveTool"},{"attributes":{"callback":null,"data":{"text":["0.001","0.01","0.1","1.0","10.0","100.0"],"y":{"__ndarray__":"AAAAAAAgckDHcwaqNPVtQDjj0CUzIWlABsmM1zIPZUCg0sRXLXlhQBRFOMxxdlxA","dtype":"float64","shape":[6]}},"selected":{"id":"26314","type":"Selection"},"selection_policy":{"id":"26313","type":"UnionRenderers"}},"id":"26266","type":"ColumnDataSource"},{"attributes":{"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26297","type":"Text"},{"attributes":{},"id":"26224","type":"LinearScale"},{"attributes":{"text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26298","type":"Text"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":90},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"26248","type":"AnnularWedge"},{"attributes":{"overlay":{"id":"26234","type":"BoxAnnotation"}},"id":"26228","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"26296","type":"ColumnDataSource"},"glyph":{"id":"26297","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26298","type":"Text"},"selection_glyph":null,"view":{"id":"26300","type":"CDSView"}},"id":"26299","type":"GlyphRenderer"},{"attributes":{},"id":"26227","type":"WheelZoomTool"},{"attributes":{"source":{"id":"26296","type":"ColumnDataSource"}},"id":"26300","type":"CDSView"},{"attributes":{},"id":"26226","type":"PanTool"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"field":"fill_color"},"inner_radius":{"units":"data","value":90},"line_color":{"field":"line_color"},"outer_radius":{"units":"data","value":290},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"26242","type":"AnnularWedge"},{"attributes":{},"id":"26303","type":"UnionRenderers"},{"attributes":{"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"26267","type":"Text"},{"attributes":{},"id":"26304","type":"Selection"},{"attributes":{"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"8pt"},"x":{"value":0},"y":{"field":"y"}},"id":"26268","type":"Text"},{"attributes":{},"id":"26305","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"26266","type":"ColumnDataSource"},"glyph":{"id":"26267","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26268","type":"Text"},"selection_glyph":null,"view":{"id":"26270","type":"CDSView"}},"id":"26269","type":"GlyphRenderer"},{"attributes":{},"id":"26222","type":"LinearScale"},{"attributes":{},"id":"26306","type":"Selection"},{"attributes":{"source":{"id":"26266","type":"ColumnDataSource"}},"id":"26270","type":"CDSView"},{"attributes":{},"id":"26307","type":"UnionRenderers"},{"attributes":{"plot":null,"text":""},"id":"26215","type":"Title"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"26220","type":"Range1d"},{"attributes":{},"id":"26308","type":"Selection"},{"attributes":{"callback":null,"end":420,"start":-420},"id":"26218","type":"Range1d"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]}},"selected":{"id":"26316","type":"Selection"},"selection_policy":{"id":"26315","type":"UnionRenderers"}},"id":"26271","type":"ColumnDataSource"},{"attributes":{},"id":"26309","type":"UnionRenderers"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"black"},"inner_radius":{"units":"data","value":80},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"26272","type":"AnnularWedge"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"juv/7wot9j95aHcnKkPwP8nK3b2SsuQ/QImZWaK90T9QDCIig6e3v2iPqupjkd2/3E1mhnOc6r8EqruLGjjzvxgtRFT7Ifm/LLDMHNwL/7+hmapy3noCwCvb7tbObwXAtRwzO79kCMA/Xnefr1kLwMufuwOgTg7AqvD/M8ihEMA=","dtype":"float64","shape":[16]},"fill_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"line_color":["#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#e69584","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8","#aeaeb8"],"start_angle":{"__ndarray__":"eWh3JypD8D/Iyt29krLkPz+JmVmivdE/TAwiIoOnt79nj6rqY5Hdv95NZoZznOq/A6q7ixo4878ZLURU+yH5vy2wzBzcC/+/oJmqct56AsAr2+7Wzm8FwLUcMzu/ZAjAP153n69ZC8DJn7sDoE4OwKvw/zPIoRDAbxEiZkAcEsA=","dtype":"float64","shape":[16]}},"selected":{"id":"26304","type":"Selection"},"selection_policy":{"id":"26303","type":"UnionRenderers"}},"id":"26241","type":"ColumnDataSource"},{"attributes":{},"id":"26310","type":"Selection"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":80},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":300},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"26273","type":"AnnularWedge"},{"attributes":{},"id":"26311","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"26271","type":"ColumnDataSource"},"glyph":{"id":"26272","type":"AnnularWedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26273","type":"AnnularWedge"},"selection_glyph":null,"view":{"id":"26275","type":"CDSView"}},"id":"26274","type":"GlyphRenderer"},{"attributes":{},"id":"26312","type":"Selection"},{"attributes":{"end_angle":{"field":"end_angle","units":"rad"},"fill_color":{"value":"#0d3362"},"inner_radius":{"units":"data","value":90},"line_color":{"value":"#0d3362"},"outer_radius":{"field":"outer_radius","units":"data"},"start_angle":{"field":"start_angle","units":"rad"},"x":{"value":0},"y":{"value":0}},"id":"26247","type":"AnnularWedge"},{"attributes":{"source":{"id":"26271","type":"ColumnDataSource"}},"id":"26275","type":"CDSView"},{"attributes":{"callback":null,"data":{"end_angle":{"__ndarray__":"Zv0QQcZU9T+i9BDxytXuP3ru/18JAuM/RKG7Ox+5zD9kd4gI55XCvwQkM1M7eeC/LCpE5PxM7L8smKo6XxD0v0AbMwNA+vm/U567yyDk/7+0ECLKAOcCwD5SZi7x2wXAyJOqkuHQCMBS1e720cULwN8WM1vCug7ANKy7X9nXEMA=","dtype":"float64","shape":[16]},"outer_radius":{"__ndarray__":"bLZfBPAOV0Cg0sRXLXlhQDLrDr5nTGNA1FIAQwHoVkAGyYzXMg9lQNRSAEMB6FZAFEU4zHF2XEAGyYzXMg9lQHi2fdUW2VZAAAAAAAAgckAGyYzXMg9lQIaiNChEiGtA/HdeznjObkAAAAAAACByQKYExgH2o29ApgTGAfajb0A=","dtype":"float64","shape":[16]},"start_angle":{"__ndarray__":"Pw8ikoF89D9UGDOTQSXtPysSIgKAUeE/CDBExPn2xT+g6P9/DFjJv1IAEbHEKeK/egYiQob97b9Thpnpo+j0v2cJIrKE0vq/PUZVvTJeAMDIh5khI1MDwFLJ3YUTSAbA3Aoi6gM9CcBmTGZO9DEMwPONqrLkJg/Avmd3i+oNEcA=","dtype":"float64","shape":[16]}},"selected":{"id":"26306","type":"Selection"},"selection_policy":{"id":"26305","type":"UnionRenderers"}},"id":"26246","type":"ColumnDataSource"},{"attributes":{},"id":"26313","type":"UnionRenderers"},{"attributes":{},"id":"26314","type":"Selection"},{"attributes":{"callback":null,"data":{"angle":{"__ndarray__":"BKq7ixo48z/dTWaGc5zqP2iPqupjkd0/WgwiIoOntz8+iZlZor3Rv8nK3b2SsuS/eGh3JypD8L+O6//vCi32v47r/+8KLfY/emh3JypD8D/Iyt29krLkP0CJmVmivdE/QAwiIoOnt79gj6rqY5Hdv+BNZoZznOq/BKq7ixo4878=","dtype":"float64","shape":[16]},"text":["Mycobacterium tuberculosis","Salmonella schottmuelleri","Proteus vulgaris","Klebsiella pneumoniae","Brucella abortus","Pseudomonas aeruginosa","Escherichia coli","Salmonella (Eberthella) typhosa","Aerobacter aerogenes","Brucella antracis","Streptococcus fecalis","Staphylococcus aureus","Staphylococcus albus","Streptococcus hemolyticus","Streptococcus viridans","Diplococcus pneumoniae"],"x":{"__ndarray__":"cGn7M6UwWkAzVkZE5WtoQKq2lcOOOXBAjuBL4jQMckDOGdT43m5xQMF6BpGZ7WxA7SBXXEoVY0AXTcs3yKRKQBFNyzfIpErA6CBXXEoVY8DBegaRme1swM4Z1PjebnHAj+BL4jQMcsCrtpXDjjlwwDJWRkTla2jAcmn7M6UwWsA=","dtype":"float64","shape":[16]},"y":{"__ndarray__":"aywf0KvmcEAmrFe0AMpqQKfycbJzKGBAv6EJxQDCOkC6LG9iL9dTwNZbjg1z2GXAdpVS2APSbsAYUkjE/tBxwBhSSMT+0HHAepVS2APSbsDWW44Nc9hlwL8sb2Iv11PAmaEJxQDCOkCi8nGycyhgQCesV7QAympAaywf0KvmcEA=","dtype":"float64","shape":[16]}},"selected":{"id":"26318","type":"Selection"},"selection_policy":{"id":"26317","type":"UnionRenderers"}},"id":"26276","type":"ColumnDataSource"},{"attributes":{},"id":"26315","type":"UnionRenderers"},{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26277","type":"Text"},{"attributes":{"source":{"id":"26241","type":"ColumnDataSource"}},"id":"26245","type":"CDSView"},{"attributes":{"background_fill_color":{"value":"#f0e1d2"},"min_border":0,"outline_line_color":{"value":"black"},"plot_height":800,"plot_width":800,"renderers":[{"id":"26234","type":"BoxAnnotation"},{"id":"26244","type":"GlyphRenderer"},{"id":"26249","type":"GlyphRenderer"},{"id":"26254","type":"GlyphRenderer"},{"id":"26259","type":"GlyphRenderer"},{"id":"26264","type":"GlyphRenderer"},{"id":"26269","type":"GlyphRenderer"},{"id":"26274","type":"GlyphRenderer"},{"id":"26279","type":"GlyphRenderer"},{"id":"26284","type":"GlyphRenderer"},{"id":"26289","type":"GlyphRenderer"},{"id":"26294","type":"GlyphRenderer"},{"id":"26299","type":"GlyphRenderer"}],"title":{"id":"26215","type":"Title"},"toolbar":{"id":"26232","type":"Toolbar"},"x_range":{"id":"26218","type":"Range1d"},"x_scale":{"id":"26222","type":"LinearScale"},"y_range":{"id":"26220","type":"Range1d"},"y_scale":{"id":"26224","type":"LinearScale"}},"id":"26216","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"26316","type":"Selection"},{"attributes":{"angle":{"field":"angle","units":"rad"},"text_align":"center","text_alpha":{"value":0.1},"text_baseline":"middle","text_color":{"value":"black"},"text_font_size":{"value":"9pt"},"x":{"field":"x"},"y":{"field":"y"}},"id":"26278","type":"Text"},{"attributes":{},"id":"26317","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"26276","type":"ColumnDataSource"},"glyph":{"id":"26277","type":"Text"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"26278","type":"Text"},"selection_glyph":null,"view":{"id":"26280","type":"CDSView"}},"id":"26279","type":"GlyphRenderer"}],"root_ids":["26216"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"c9c74c74-c8e4-4efd-a814-67a414c55b68","roots":{"26216":"8ffbe15a-bdea-463b-b788-74bb45f3406b"}}];
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();