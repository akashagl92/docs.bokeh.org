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
      };var element = document.getElementById("99e8a604-6c6e-4dc1-a678-2d04156db5e3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '99e8a604-6c6e-4dc1-a678-2d04156db5e3' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.1.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.1.min.js"];
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
                    
                  var docs_json = '{"b9146b60-ddcb-403f-b974-56623fc0ec99":{"roots":{"references":[{"attributes":{"fields":["y0","y1","y2"]},"id":"8074","type":"Stack"},{"attributes":{"label":{"value":"y1"},"renderers":[{"id":"8108","type":"GlyphRenderer"}]},"id":"8119","type":"LegendItem"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[49,82,76,17,65,97,21,40,40,12,26,39,89,76,52],"y1":[89,85,67,33,36,99,17,33,27,34,34,70,24,14,35],"y2":[20,22,26,73,76,42,30,59,34,73,61,91,96,27,52],"y3":[85,64,20,31,42,46,12,75,34,76,90,60,34,90,69],"y4":[78,65,99,61,44,65,24,13,14,23,35,38,40,24,23],"y5":[46,51,93,70,33,32,18,37,16,50,59,42,33,98,32],"y6":[46,89,88,88,67,21,55,88,16,87,11,27,37,18,90],"y7":[77,15,54,33,98,77,49,37,51,14,95,98,60,77,35],"y8":[34,73,80,40,67,54,97,96,10,87,48,98,78,13,33],"y9":[85,31,10,89,73,41,25,31,38,49,77,48,18,11,48]},"selected":{"id":"8255","type":"Selection"},"selection_policy":{"id":"8256","type":"UnionRenderers"}},"id":"8204","type":"ColumnDataSource"},{"attributes":{"fields":["y0","y1","y2"]},"id":"8075","type":"Stack"},{"attributes":{},"id":"8061","type":"HelpTool"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[49,82,76,17,65,97,21,40,40,12,26,39,89,76,52],"y1":[89,85,67,33,36,99,17,33,27,34,34,70,24,14,35],"y2":[20,22,26,73,76,42,30,59,34,73,61,91,96,27,52],"y3":[85,64,20,31,42,46,12,75,34,76,90,60,34,90,69],"y4":[78,65,99,61,44,65,24,13,14,23,35,38,40,24,23],"y5":[46,51,93,70,33,32,18,37,16,50,59,42,33,98,32],"y6":[46,89,88,88,67,21,55,88,16,87,11,27,37,18,90],"y7":[77,15,54,33,98,77,49,37,51,14,95,98,60,77,35],"y8":[34,73,80,40,67,54,97,96,10,87,48,98,78,13,33],"y9":[85,31,10,89,73,41,25,31,38,49,77,48,18,11,48]},"selected":{"id":"8155","type":"Selection"},"selection_policy":{"id":"8156","type":"UnionRenderers"}},"id":"8120","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8258","type":"ColumnDataSource"}},"id":"8263","type":"CDSView"},{"attributes":{"fields":["y0","y1","y2","y3"]},"id":"8076","type":"Stack"},{"attributes":{},"id":"8228","type":"UnionRenderers"},{"attributes":{"fields":["y0","y1","y2","y3","y4"]},"id":"8079","type":"Stack"},{"attributes":{},"id":"8136","type":"UnionRenderers"},{"attributes":{"fields":["y0","y1","y2","y3"]},"id":"8077","type":"Stack"},{"attributes":{"fill_color":"#fdae61","x":{"field":"index"},"y1":{"expr":{"id":"8081","type":"Stack"}},"y2":{"expr":{"id":"8082","type":"Stack"}}},"id":"8206","type":"VArea"},{"attributes":{"fields":[]},"id":"8069","type":"Stack"},{"attributes":{"fill_color":"#66c2a5","x":{"field":"index"},"y1":{"expr":{"id":"8073","type":"Stack"}},"y2":{"expr":{"id":"8074","type":"Stack"}}},"id":"8122","type":"VArea"},{"attributes":{"fields":["y0","y1","y2","y3","y4"]},"id":"8078","type":"Stack"},{"attributes":{"data_source":{"id":"8258","type":"ColumnDataSource"},"glyph":{"id":"8260","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y8","nonselection_glyph":{"id":"8261","type":"VArea"},"selection_glyph":null,"view":{"id":"8263","type":"CDSView"}},"id":"8262","type":"GlyphRenderer"},{"attributes":{},"id":"8227","type":"Selection"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5"]},"id":"8080","type":"Stack"},{"attributes":{"source":{"id":"8204","type":"ColumnDataSource"}},"id":"8209","type":"CDSView"},{"attributes":{"below":[{"id":"8046","type":"LinearAxis"}],"center":[{"id":"8050","type":"Grid"},{"id":"8055","type":"Grid"},{"id":"8102","type":"Legend"}],"left":[{"id":"8051","type":"LinearAxis"}],"renderers":[{"id":"8093","type":"GlyphRenderer"},{"id":"8108","type":"GlyphRenderer"},{"id":"8124","type":"GlyphRenderer"},{"id":"8142","type":"GlyphRenderer"},{"id":"8162","type":"GlyphRenderer"},{"id":"8184","type":"GlyphRenderer"},{"id":"8208","type":"GlyphRenderer"},{"id":"8234","type":"GlyphRenderer"},{"id":"8262","type":"GlyphRenderer"},{"id":"8292","type":"GlyphRenderer"}],"title":{"id":"8096","type":"Title"},"toolbar":{"id":"8062","type":"Toolbar"},"x_range":{"id":"8038","type":"Range1d"},"x_scale":{"id":"8042","type":"LinearScale"},"y_range":{"id":"8040","type":"Range1d"},"y_scale":{"id":"8044","type":"LinearScale"}},"id":"8037","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8135","type":"Selection"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5"]},"id":"8081","type":"Stack"},{"attributes":{"data_source":{"id":"8204","type":"ColumnDataSource"},"glyph":{"id":"8206","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y6","nonselection_glyph":{"id":"8207","type":"VArea"},"selection_glyph":null,"view":{"id":"8209","type":"CDSView"}},"id":"8208","type":"GlyphRenderer"},{"attributes":{"source":{"id":"8120","type":"ColumnDataSource"}},"id":"8125","type":"CDSView"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6"]},"id":"8082","type":"Stack"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8081","type":"Stack"}},"y2":{"expr":{"id":"8082","type":"Stack"}}},"id":"8207","type":"VArea"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8056","type":"PanTool"},{"id":"8057","type":"WheelZoomTool"},{"id":"8058","type":"BoxZoomTool"},{"id":"8059","type":"SaveTool"},{"id":"8060","type":"ResetTool"},{"id":"8061","type":"HelpTool"}]},"id":"8062","type":"Toolbar"},{"attributes":{"data_source":{"id":"8120","type":"ColumnDataSource"},"glyph":{"id":"8122","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y2","nonselection_glyph":{"id":"8123","type":"VArea"},"selection_glyph":null,"view":{"id":"8125","type":"CDSView"}},"id":"8124","type":"GlyphRenderer"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6"]},"id":"8083","type":"Stack"},{"attributes":{"label":{"value":"y6"},"renderers":[{"id":"8208","type":"GlyphRenderer"}]},"id":"8229","type":"LegendItem"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8073","type":"Stack"}},"y2":{"expr":{"id":"8074","type":"Stack"}}},"id":"8123","type":"VArea"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6","y7"]},"id":"8084","type":"Stack"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[49,82,76,17,65,97,21,40,40,12,26,39,89,76,52],"y1":[89,85,67,33,36,99,17,33,27,34,34,70,24,14,35],"y2":[20,22,26,73,76,42,30,59,34,73,61,91,96,27,52],"y3":[85,64,20,31,42,46,12,75,34,76,90,60,34,90,69],"y4":[78,65,99,61,44,65,24,13,14,23,35,38,40,24,23],"y5":[46,51,93,70,33,32,18,37,16,50,59,42,33,98,32],"y6":[46,89,88,88,67,21,55,88,16,87,11,27,37,18,90],"y7":[77,15,54,33,98,77,49,37,51,14,95,98,60,77,35],"y8":[34,73,80,40,67,54,97,96,10,87,48,98,78,13,33],"y9":[85,31,10,89,73,41,25,31,38,49,77,48,18,11,48]},"selected":{"id":"8285","type":"Selection"},"selection_policy":{"id":"8286","type":"UnionRenderers"}},"id":"8230","type":"ColumnDataSource"},{"attributes":{"fill_color":"#e6f598","x":{"field":"index"},"y1":{"expr":{"id":"8077","type":"Stack"}},"y2":{"expr":{"id":"8078","type":"Stack"}}},"id":"8160","type":"VArea"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6","y7"]},"id":"8085","type":"Stack"},{"attributes":{"label":{"value":"y2"},"renderers":[{"id":"8124","type":"GlyphRenderer"}]},"id":"8137","type":"LegendItem"},{"attributes":{},"id":"8286","type":"UnionRenderers"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6","y7","y8"]},"id":"8086","type":"Stack"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[49,82,76,17,65,97,21,40,40,12,26,39,89,76,52],"y1":[89,85,67,33,36,99,17,33,27,34,34,70,24,14,35],"y2":[20,22,26,73,76,42,30,59,34,73,61,91,96,27,52],"y3":[85,64,20,31,42,46,12,75,34,76,90,60,34,90,69],"y4":[78,65,99,61,44,65,24,13,14,23,35,38,40,24,23],"y5":[46,51,93,70,33,32,18,37,16,50,59,42,33,98,32],"y6":[46,89,88,88,67,21,55,88,16,87,11,27,37,18,90],"y7":[77,15,54,33,98,77,49,37,51,14,95,98,60,77,35],"y8":[34,73,80,40,67,54,97,96,10,87,48,98,78,13,33],"y9":[85,31,10,89,73,41,25,31,38,49,77,48,18,11,48]},"selected":{"id":"8177","type":"Selection"},"selection_policy":{"id":"8178","type":"UnionRenderers"}},"id":"8138","type":"ColumnDataSource"},{"attributes":{},"id":"8256","type":"UnionRenderers"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6","y7","y8"]},"id":"8087","type":"Stack"},{"attributes":{"fill_color":"#f46d43","x":{"field":"index"},"y1":{"expr":{"id":"8083","type":"Stack"}},"y2":{"expr":{"id":"8084","type":"Stack"}}},"id":"8232","type":"VArea"},{"attributes":{},"id":"8178","type":"UnionRenderers"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6","y7","y8","y9"]},"id":"8088","type":"Stack"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[49,82,76,17,65,97,21,40,40,12,26,39,89,76,52],"y1":[89,85,67,33,36,99,17,33,27,34,34,70,24,14,35],"y2":[20,22,26,73,76,42,30,59,34,73,61,91,96,27,52],"y3":[85,64,20,31,42,46,12,75,34,76,90,60,34,90,69],"y4":[78,65,99,61,44,65,24,13,14,23,35,38,40,24,23],"y5":[46,51,93,70,33,32,18,37,16,50,59,42,33,98,32],"y6":[46,89,88,88,67,21,55,88,16,87,11,27,37,18,90],"y7":[77,15,54,33,98,77,49,37,51,14,95,98,60,77,35],"y8":[34,73,80,40,67,54,97,96,10,87,48,98,78,13,33],"y9":[85,31,10,89,73,41,25,31,38,49,77,48,18,11,48]},"selected":{"id":"8117","type":"Selection"},"selection_policy":{"id":"8118","type":"UnionRenderers"}},"id":"8089","type":"ColumnDataSource"},{"attributes":{"source":{"id":"8158","type":"ColumnDataSource"}},"id":"8163","type":"CDSView"},{"attributes":{"fill_color":"#abdda4","x":{"field":"index"},"y1":{"expr":{"id":"8075","type":"Stack"}},"y2":{"expr":{"id":"8076","type":"Stack"}}},"id":"8140","type":"VArea"},{"attributes":{"fields":["y0","y1"]},"id":"8073","type":"Stack"},{"attributes":{},"id":"8285","type":"Selection"},{"attributes":{"minor_grid_line_color":"#eeeeee","ticker":{"id":"8047","type":"BasicTicker"}},"id":"8050","type":"Grid"},{"attributes":{"label":{"value":"y3"},"renderers":[{"id":"8142","type":"GlyphRenderer"}]},"id":"8157","type":"LegendItem"},{"attributes":{},"id":"8255","type":"Selection"},{"attributes":{"data_source":{"id":"8089","type":"ColumnDataSource"},"glyph":{"id":"8091","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y0","nonselection_glyph":{"id":"8092","type":"VArea"},"selection_glyph":null,"view":{"id":"8094","type":"CDSView"}},"id":"8093","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y5"},"renderers":[{"id":"8184","type":"GlyphRenderer"}]},"id":"8203","type":"LegendItem"},{"attributes":{},"id":"8097","type":"BasicTickFormatter"},{"attributes":{},"id":"8177","type":"Selection"},{"attributes":{"source":{"id":"8230","type":"ColumnDataSource"}},"id":"8235","type":"CDSView"},{"attributes":{"fill_color":"#5e4fa2","x":{"field":"index"},"y1":{"expr":{"id":"8069","type":"Stack"}},"y2":{"expr":{"id":"8070","type":"Stack"}}},"id":"8091","type":"VArea"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[49,82,76,17,65,97,21,40,40,12,26,39,89,76,52],"y1":[89,85,67,33,36,99,17,33,27,34,34,70,24,14,35],"y2":[20,22,26,73,76,42,30,59,34,73,61,91,96,27,52],"y3":[85,64,20,31,42,46,12,75,34,76,90,60,34,90,69],"y4":[78,65,99,61,44,65,24,13,14,23,35,38,40,24,23],"y5":[46,51,93,70,33,32,18,37,16,50,59,42,33,98,32],"y6":[46,89,88,88,67,21,55,88,16,87,11,27,37,18,90],"y7":[77,15,54,33,98,77,49,37,51,14,95,98,60,77,35],"y8":[34,73,80,40,67,54,97,96,10,87,48,98,78,13,33],"y9":[85,31,10,89,73,41,25,31,38,49,77,48,18,11,48]},"selected":{"id":"8201","type":"Selection"},"selection_policy":{"id":"8202","type":"UnionRenderers"}},"id":"8158","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":800},"id":"8040","type":"Range1d"},{"attributes":{"data_source":{"id":"8230","type":"ColumnDataSource"},"glyph":{"id":"8232","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y7","nonselection_glyph":{"id":"8233","type":"VArea"},"selection_glyph":null,"view":{"id":"8235","type":"CDSView"}},"id":"8234","type":"GlyphRenderer"},{"attributes":{},"id":"8060","type":"ResetTool"},{"attributes":{"source":{"id":"8138","type":"ColumnDataSource"}},"id":"8143","type":"CDSView"},{"attributes":{"callback":null,"end":14},"id":"8038","type":"Range1d"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8083","type":"Stack"}},"y2":{"expr":{"id":"8084","type":"Stack"}}},"id":"8233","type":"VArea"},{"attributes":{"text":""},"id":"8096","type":"Title"},{"attributes":{},"id":"8042","type":"LinearScale"},{"attributes":{"data_source":{"id":"8138","type":"ColumnDataSource"},"glyph":{"id":"8140","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y3","nonselection_glyph":{"id":"8141","type":"VArea"},"selection_glyph":null,"view":{"id":"8143","type":"CDSView"}},"id":"8142","type":"GlyphRenderer"},{"attributes":{"source":{"id":"8089","type":"ColumnDataSource"}},"id":"8094","type":"CDSView"},{"attributes":{"label":{"value":"y7"},"renderers":[{"id":"8234","type":"GlyphRenderer"}]},"id":"8257","type":"LegendItem"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8075","type":"Stack"}},"y2":{"expr":{"id":"8076","type":"Stack"}}},"id":"8141","type":"VArea"},{"attributes":{},"id":"8057","type":"WheelZoomTool"},{"attributes":{},"id":"8044","type":"LinearScale"},{"attributes":{"overlay":{"id":"8101","type":"BoxAnnotation"}},"id":"8058","type":"BoxZoomTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8069","type":"Stack"}},"y2":{"expr":{"id":"8070","type":"Stack"}}},"id":"8092","type":"VArea"},{"attributes":{"fill_color":"#d53e4f","x":{"field":"index"},"y1":{"expr":{"id":"8085","type":"Stack"}},"y2":{"expr":{"id":"8086","type":"Stack"}}},"id":"8260","type":"VArea"},{"attributes":{"fields":["y0"]},"id":"8071","type":"Stack"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8085","type":"Stack"}},"y2":{"expr":{"id":"8086","type":"Stack"}}},"id":"8261","type":"VArea"},{"attributes":{},"id":"8047","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8099","type":"BasicTickFormatter"},"ticker":{"id":"8047","type":"BasicTicker"}},"id":"8046","type":"LinearAxis"},{"attributes":{"data_source":{"id":"8158","type":"ColumnDataSource"},"glyph":{"id":"8160","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y4","nonselection_glyph":{"id":"8161","type":"VArea"},"selection_glyph":null,"view":{"id":"8163","type":"CDSView"}},"id":"8162","type":"GlyphRenderer"},{"attributes":{"fields":["y0","y1"]},"id":"8072","type":"Stack"},{"attributes":{"label":{"value":"y8"},"renderers":[{"id":"8262","type":"GlyphRenderer"}]},"id":"8287","type":"LegendItem"},{"attributes":{},"id":"8099","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[49,82,76,17,65,97,21,40,40,12,26,39,89,76,52],"y1":[89,85,67,33,36,99,17,33,27,34,34,70,24,14,35],"y2":[20,22,26,73,76,42,30,59,34,73,61,91,96,27,52],"y3":[85,64,20,31,42,46,12,75,34,76,90,60,34,90,69],"y4":[78,65,99,61,44,65,24,13,14,23,35,38,40,24,23],"y5":[46,51,93,70,33,32,18,37,16,50,59,42,33,98,32],"y6":[46,89,88,88,67,21,55,88,16,87,11,27,37,18,90],"y7":[77,15,54,33,98,77,49,37,51,14,95,98,60,77,35],"y8":[34,73,80,40,67,54,97,96,10,87,48,98,78,13,33],"y9":[85,31,10,89,73,41,25,31,38,49,77,48,18,11,48]},"selected":{"id":"8345","type":"Selection"},"selection_policy":{"id":"8346","type":"UnionRenderers"}},"id":"8288","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8077","type":"Stack"}},"y2":{"expr":{"id":"8078","type":"Stack"}}},"id":"8161","type":"VArea"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8101","type":"BoxAnnotation"},{"attributes":{"dimension":1,"minor_grid_line_color":"#eeeeee","ticker":{"id":"8052","type":"BasicTicker"}},"id":"8055","type":"Grid"},{"attributes":{"items":[{"id":"8319","type":"LegendItem"},{"id":"8287","type":"LegendItem"},{"id":"8257","type":"LegendItem"},{"id":"8229","type":"LegendItem"},{"id":"8203","type":"LegendItem"},{"id":"8179","type":"LegendItem"},{"id":"8157","type":"LegendItem"},{"id":"8137","type":"LegendItem"},{"id":"8119","type":"LegendItem"},{"id":"8103","type":"LegendItem"}]},"id":"8102","type":"Legend"},{"attributes":{"label":{"value":"y4"},"renderers":[{"id":"8162","type":"GlyphRenderer"}]},"id":"8179","type":"LegendItem"},{"attributes":{},"id":"8056","type":"PanTool"},{"attributes":{},"id":"8318","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[49,82,76,17,65,97,21,40,40,12,26,39,89,76,52],"y1":[89,85,67,33,36,99,17,33,27,34,34,70,24,14,35],"y2":[20,22,26,73,76,42,30,59,34,73,61,91,96,27,52],"y3":[85,64,20,31,42,46,12,75,34,76,90,60,34,90,69],"y4":[78,65,99,61,44,65,24,13,14,23,35,38,40,24,23],"y5":[46,51,93,70,33,32,18,37,16,50,59,42,33,98,32],"y6":[46,89,88,88,67,21,55,88,16,87,11,27,37,18,90],"y7":[77,15,54,33,98,77,49,37,51,14,95,98,60,77,35],"y8":[34,73,80,40,67,54,97,96,10,87,48,98,78,13,33],"y9":[85,31,10,89,73,41,25,31,38,49,77,48,18,11,48]},"selected":{"id":"8227","type":"Selection"},"selection_policy":{"id":"8228","type":"UnionRenderers"}},"id":"8180","type":"ColumnDataSource"},{"attributes":{"label":{"value":"y0"},"renderers":[{"id":"8093","type":"GlyphRenderer"}]},"id":"8103","type":"LegendItem"},{"attributes":{"fill_color":"#9e0142","x":{"field":"index"},"y1":{"expr":{"id":"8087","type":"Stack"}},"y2":{"expr":{"id":"8088","type":"Stack"}}},"id":"8290","type":"VArea"},{"attributes":{"fields":["y0"]},"id":"8070","type":"Stack"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[49,82,76,17,65,97,21,40,40,12,26,39,89,76,52],"y1":[89,85,67,33,36,99,17,33,27,34,34,70,24,14,35],"y2":[20,22,26,73,76,42,30,59,34,73,61,91,96,27,52],"y3":[85,64,20,31,42,46,12,75,34,76,90,60,34,90,69],"y4":[78,65,99,61,44,65,24,13,14,23,35,38,40,24,23],"y5":[46,51,93,70,33,32,18,37,16,50,59,42,33,98,32],"y6":[46,89,88,88,67,21,55,88,16,87,11,27,37,18,90],"y7":[77,15,54,33,98,77,49,37,51,14,95,98,60,77,35],"y8":[34,73,80,40,67,54,97,96,10,87,48,98,78,13,33],"y9":[85,31,10,89,73,41,25,31,38,49,77,48,18,11,48]},"selected":{"id":"8135","type":"Selection"},"selection_policy":{"id":"8136","type":"UnionRenderers"}},"id":"8104","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[49,82,76,17,65,97,21,40,40,12,26,39,89,76,52],"y1":[89,85,67,33,36,99,17,33,27,34,34,70,24,14,35],"y2":[20,22,26,73,76,42,30,59,34,73,61,91,96,27,52],"y3":[85,64,20,31,42,46,12,75,34,76,90,60,34,90,69],"y4":[78,65,99,61,44,65,24,13,14,23,35,38,40,24,23],"y5":[46,51,93,70,33,32,18,37,16,50,59,42,33,98,32],"y6":[46,89,88,88,67,21,55,88,16,87,11,27,37,18,90],"y7":[77,15,54,33,98,77,49,37,51,14,95,98,60,77,35],"y8":[34,73,80,40,67,54,97,96,10,87,48,98,78,13,33],"y9":[85,31,10,89,73,41,25,31,38,49,77,48,18,11,48]},"selected":{"id":"8317","type":"Selection"},"selection_policy":{"id":"8318","type":"UnionRenderers"}},"id":"8258","type":"ColumnDataSource"},{"attributes":{},"id":"8317","type":"Selection"},{"attributes":{},"id":"8155","type":"Selection"},{"attributes":{},"id":"8202","type":"UnionRenderers"},{"attributes":{"source":{"id":"8288","type":"ColumnDataSource"}},"id":"8293","type":"CDSView"},{"attributes":{"formatter":{"id":"8097","type":"BasicTickFormatter"},"ticker":{"id":"8052","type":"BasicTicker"}},"id":"8051","type":"LinearAxis"},{"attributes":{},"id":"8059","type":"SaveTool"},{"attributes":{"fill_color":"#fee08b","x":{"field":"index"},"y1":{"expr":{"id":"8079","type":"Stack"}},"y2":{"expr":{"id":"8080","type":"Stack"}}},"id":"8182","type":"VArea"},{"attributes":{},"id":"8118","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"8288","type":"ColumnDataSource"},"glyph":{"id":"8290","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y9","nonselection_glyph":{"id":"8291","type":"VArea"},"selection_glyph":null,"view":{"id":"8293","type":"CDSView"}},"id":"8292","type":"GlyphRenderer"},{"attributes":{},"id":"8117","type":"Selection"},{"attributes":{},"id":"8201","type":"Selection"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8087","type":"Stack"}},"y2":{"expr":{"id":"8088","type":"Stack"}}},"id":"8291","type":"VArea"},{"attributes":{},"id":"8156","type":"UnionRenderers"},{"attributes":{"source":{"id":"8180","type":"ColumnDataSource"}},"id":"8185","type":"CDSView"},{"attributes":{},"id":"8052","type":"BasicTicker"},{"attributes":{"source":{"id":"8104","type":"ColumnDataSource"}},"id":"8109","type":"CDSView"},{"attributes":{"label":{"value":"y9"},"renderers":[{"id":"8292","type":"GlyphRenderer"}]},"id":"8319","type":"LegendItem"},{"attributes":{"data_source":{"id":"8180","type":"ColumnDataSource"},"glyph":{"id":"8182","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y5","nonselection_glyph":{"id":"8183","type":"VArea"},"selection_glyph":null,"view":{"id":"8185","type":"CDSView"}},"id":"8184","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"8104","type":"ColumnDataSource"},"glyph":{"id":"8106","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y1","nonselection_glyph":{"id":"8107","type":"VArea"},"selection_glyph":null,"view":{"id":"8109","type":"CDSView"}},"id":"8108","type":"GlyphRenderer"},{"attributes":{},"id":"8345","type":"Selection"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8079","type":"Stack"}},"y2":{"expr":{"id":"8080","type":"Stack"}}},"id":"8183","type":"VArea"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8071","type":"Stack"}},"y2":{"expr":{"id":"8072","type":"Stack"}}},"id":"8107","type":"VArea"},{"attributes":{},"id":"8346","type":"UnionRenderers"},{"attributes":{"fill_color":"#3288bd","x":{"field":"index"},"y1":{"expr":{"id":"8071","type":"Stack"}},"y2":{"expr":{"id":"8072","type":"Stack"}}},"id":"8106","type":"VArea"}],"root_ids":["8037"]},"title":"Bokeh Application","version":"1.3.1"}}';
                  var render_items = [{"docid":"b9146b60-ddcb-403f-b974-56623fc0ec99","roots":{"8037":"99e8a604-6c6e-4dc1-a678-2d04156db5e3"}}];
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