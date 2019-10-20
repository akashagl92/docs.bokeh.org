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
      };var element = document.getElementById("2c06bf41-2e54-49d7-842e-da0f3dd9410b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '2c06bf41-2e54-49d7-842e-da0f3dd9410b' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.4.min.js"];
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
                    
                  var docs_json = '{"f6dd2aa8-4e20-4a16-9b1e-3068829eb4d4":{"roots":{"references":[{"attributes":{},"id":"8042","type":"LinearScale"},{"attributes":{},"id":"8117","type":"UnionRenderers"},{"attributes":{"fields":[]},"id":"8069","type":"Stack"},{"attributes":{},"id":"8135","type":"UnionRenderers"},{"attributes":{"fields":["y0","y1","y2"]},"id":"8075","type":"Stack"},{"attributes":{"fields":["y0","y1","y2","y3","y4"]},"id":"8079","type":"Stack"},{"attributes":{"source":{"id":"8204","type":"ColumnDataSource"}},"id":"8209","type":"CDSView"},{"attributes":{},"id":"8044","type":"LinearScale"},{"attributes":{"fill_color":"#abdda4","x":{"field":"index"},"y1":{"expr":{"id":"8075","type":"Stack"}},"y2":{"expr":{"id":"8076","type":"Stack"}}},"id":"8140","type":"VArea"},{"attributes":{},"id":"8134","type":"Selection"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6","y7","y8","y9"]},"id":"8088","type":"Stack"},{"attributes":{"fill_color":"#e6f598","x":{"field":"index"},"y1":{"expr":{"id":"8077","type":"Stack"}},"y2":{"expr":{"id":"8078","type":"Stack"}}},"id":"8160","type":"VArea"},{"attributes":{"data_source":{"id":"8120","type":"ColumnDataSource"},"glyph":{"id":"8122","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y2","nonselection_glyph":{"id":"8123","type":"VArea"},"selection_glyph":null,"view":{"id":"8125","type":"CDSView"}},"id":"8124","type":"GlyphRenderer"},{"attributes":{},"id":"8200","type":"Selection"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6","y7","y8"]},"id":"8086","type":"Stack"},{"attributes":{"label":{"value":"y1"},"renderers":[{"id":"8108","type":"GlyphRenderer"}]},"id":"8119","type":"LegendItem"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[62,62,72,86,20,69,22,41,65,39,38,46,70,85,52],"y1":[82,70,48,28,19,32,91,94,20,22,80,53,92,95,45],"y2":[89,99,85,90,24,41,87,59,12,21,37,95,16,14,71],"y3":[15,65,88,94,64,70,84,54,86,46,77,44,49,84,34],"y4":[87,17,83,59,51,37,63,84,53,66,59,71,18,68,91],"y5":[26,16,15,74,79,68,28,71,20,79,70,16,63,16,12],"y6":[69,66,23,62,77,31,63,49,87,79,74,83,66,42,32],"y7":[27,57,32,34,20,70,59,99,43,68,93,14,44,24,81],"y8":[23,21,63,99,78,36,32,72,98,17,17,32,30,60,48],"y9":[35,81,50,11,10,65,57,86,55,64,74,37,82,40,29]},"selected":{"id":"8176","type":"Selection"},"selection_policy":{"id":"8177","type":"UnionRenderers"}},"id":"8138","type":"ColumnDataSource"},{"attributes":{"label":{"value":"y6"},"renderers":[{"id":"8208","type":"GlyphRenderer"}]},"id":"8229","type":"LegendItem"},{"attributes":{"source":{"id":"8180","type":"ColumnDataSource"}},"id":"8185","type":"CDSView"},{"attributes":{"source":{"id":"8258","type":"ColumnDataSource"}},"id":"8263","type":"CDSView"},{"attributes":{},"id":"8100","type":"BasicTickFormatter"},{"attributes":{},"id":"8060","type":"ResetTool"},{"attributes":{"below":[{"id":"8046","type":"LinearAxis"}],"center":[{"id":"8050","type":"Grid"},{"id":"8055","type":"Grid"},{"id":"8102","type":"Legend"}],"left":[{"id":"8051","type":"LinearAxis"}],"renderers":[{"id":"8093","type":"GlyphRenderer"},{"id":"8108","type":"GlyphRenderer"},{"id":"8124","type":"GlyphRenderer"},{"id":"8142","type":"GlyphRenderer"},{"id":"8162","type":"GlyphRenderer"},{"id":"8184","type":"GlyphRenderer"},{"id":"8208","type":"GlyphRenderer"},{"id":"8234","type":"GlyphRenderer"},{"id":"8262","type":"GlyphRenderer"},{"id":"8292","type":"GlyphRenderer"}],"title":{"id":"8096","type":"Title"},"toolbar":{"id":"8062","type":"Toolbar"},"x_range":{"id":"8038","type":"Range1d"},"x_scale":{"id":"8042","type":"LinearScale"},"y_range":{"id":"8040","type":"Range1d"},"y_scale":{"id":"8044","type":"LinearScale"}},"id":"8037","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8226","type":"Selection"},{"attributes":{"fields":["y0","y1"]},"id":"8073","type":"Stack"},{"attributes":{},"id":"8201","type":"UnionRenderers"},{"attributes":{"callback":null,"end":800},"id":"8040","type":"Range1d"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8069","type":"Stack"}},"y2":{"expr":{"id":"8070","type":"Stack"}}},"id":"8092","type":"VArea"},{"attributes":{},"id":"8059","type":"SaveTool"},{"attributes":{},"id":"8285","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"8101","type":"BoxAnnotation"}},"id":"8058","type":"BoxZoomTool"},{"attributes":{"label":{"value":"y8"},"renderers":[{"id":"8262","type":"GlyphRenderer"}]},"id":"8287","type":"LegendItem"},{"attributes":{"fields":["y0","y1"]},"id":"8072","type":"Stack"},{"attributes":{},"id":"8154","type":"Selection"},{"attributes":{},"id":"8057","type":"WheelZoomTool"},{"attributes":{"fields":["y0"]},"id":"8070","type":"Stack"},{"attributes":{"formatter":{"id":"8098","type":"BasicTickFormatter"},"ticker":{"id":"8052","type":"BasicTicker"}},"id":"8051","type":"LinearAxis"},{"attributes":{"data_source":{"id":"8089","type":"ColumnDataSource"},"glyph":{"id":"8091","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y0","nonselection_glyph":{"id":"8092","type":"VArea"},"selection_glyph":null,"view":{"id":"8094","type":"CDSView"}},"id":"8093","type":"GlyphRenderer"},{"attributes":{"source":{"id":"8138","type":"ColumnDataSource"}},"id":"8143","type":"CDSView"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6"]},"id":"8082","type":"Stack"},{"attributes":{"fill_color":"#f46d43","x":{"field":"index"},"y1":{"expr":{"id":"8083","type":"Stack"}},"y2":{"expr":{"id":"8084","type":"Stack"}}},"id":"8232","type":"VArea"},{"attributes":{"data_source":{"id":"8180","type":"ColumnDataSource"},"glyph":{"id":"8182","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y5","nonselection_glyph":{"id":"8183","type":"VArea"},"selection_glyph":null,"view":{"id":"8185","type":"CDSView"}},"id":"8184","type":"GlyphRenderer"},{"attributes":{},"id":"8056","type":"PanTool"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6","y7"]},"id":"8085","type":"Stack"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8079","type":"Stack"}},"y2":{"expr":{"id":"8080","type":"Stack"}}},"id":"8183","type":"VArea"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8056","type":"PanTool"},{"id":"8057","type":"WheelZoomTool"},{"id":"8058","type":"BoxZoomTool"},{"id":"8059","type":"SaveTool"},{"id":"8060","type":"ResetTool"},{"id":"8061","type":"HelpTool"}]},"id":"8062","type":"Toolbar"},{"attributes":{},"id":"8155","type":"UnionRenderers"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6","y7"]},"id":"8084","type":"Stack"},{"attributes":{"fields":["y0","y1","y2","y3"]},"id":"8076","type":"Stack"},{"attributes":{},"id":"8316","type":"Selection"},{"attributes":{"source":{"id":"8120","type":"ColumnDataSource"}},"id":"8125","type":"CDSView"},{"attributes":{"source":{"id":"8288","type":"ColumnDataSource"}},"id":"8293","type":"CDSView"},{"attributes":{"fill_color":"#3288bd","x":{"field":"index"},"y1":{"expr":{"id":"8071","type":"Stack"}},"y2":{"expr":{"id":"8072","type":"Stack"}}},"id":"8106","type":"VArea"},{"attributes":{"data_source":{"id":"8138","type":"ColumnDataSource"},"glyph":{"id":"8140","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y3","nonselection_glyph":{"id":"8141","type":"VArea"},"selection_glyph":null,"view":{"id":"8143","type":"CDSView"}},"id":"8142","type":"GlyphRenderer"},{"attributes":{},"id":"8317","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8075","type":"Stack"}},"y2":{"expr":{"id":"8076","type":"Stack"}}},"id":"8141","type":"VArea"},{"attributes":{"label":{"value":"y2"},"renderers":[{"id":"8124","type":"GlyphRenderer"}]},"id":"8137","type":"LegendItem"},{"attributes":{"fill_color":"#5e4fa2","x":{"field":"index"},"y1":{"expr":{"id":"8069","type":"Stack"}},"y2":{"expr":{"id":"8070","type":"Stack"}}},"id":"8091","type":"VArea"},{"attributes":{},"id":"8227","type":"UnionRenderers"},{"attributes":{"fill_color":"#d53e4f","x":{"field":"index"},"y1":{"expr":{"id":"8085","type":"Stack"}},"y2":{"expr":{"id":"8086","type":"Stack"}}},"id":"8260","type":"VArea"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5"]},"id":"8080","type":"Stack"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[62,62,72,86,20,69,22,41,65,39,38,46,70,85,52],"y1":[82,70,48,28,19,32,91,94,20,22,80,53,92,95,45],"y2":[89,99,85,90,24,41,87,59,12,21,37,95,16,14,71],"y3":[15,65,88,94,64,70,84,54,86,46,77,44,49,84,34],"y4":[87,17,83,59,51,37,63,84,53,66,59,71,18,68,91],"y5":[26,16,15,74,79,68,28,71,20,79,70,16,63,16,12],"y6":[69,66,23,62,77,31,63,49,87,79,74,83,66,42,32],"y7":[27,57,32,34,20,70,59,99,43,68,93,14,44,24,81],"y8":[23,21,63,99,78,36,32,72,98,17,17,32,30,60,48],"y9":[35,81,50,11,10,65,57,86,55,64,74,37,82,40,29]},"selected":{"id":"8284","type":"Selection"},"selection_policy":{"id":"8285","type":"UnionRenderers"}},"id":"8230","type":"ColumnDataSource"},{"attributes":{"fill_color":"#66c2a5","x":{"field":"index"},"y1":{"expr":{"id":"8073","type":"Stack"}},"y2":{"expr":{"id":"8074","type":"Stack"}}},"id":"8122","type":"VArea"},{"attributes":{"label":{"value":"y3"},"renderers":[{"id":"8142","type":"GlyphRenderer"}]},"id":"8157","type":"LegendItem"},{"attributes":{"data_source":{"id":"8288","type":"ColumnDataSource"},"glyph":{"id":"8290","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y9","nonselection_glyph":{"id":"8291","type":"VArea"},"selection_glyph":null,"view":{"id":"8293","type":"CDSView"}},"id":"8292","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8087","type":"Stack"}},"y2":{"expr":{"id":"8088","type":"Stack"}}},"id":"8291","type":"VArea"},{"attributes":{},"id":"8116","type":"Selection"},{"attributes":{"formatter":{"id":"8100","type":"BasicTickFormatter"},"ticker":{"id":"8047","type":"BasicTicker"}},"id":"8046","type":"LinearAxis"},{"attributes":{"source":{"id":"8089","type":"ColumnDataSource"}},"id":"8094","type":"CDSView"},{"attributes":{},"id":"8052","type":"BasicTicker"},{"attributes":{"label":{"value":"y0"},"renderers":[{"id":"8093","type":"GlyphRenderer"}]},"id":"8103","type":"LegendItem"},{"attributes":{"data_source":{"id":"8104","type":"ColumnDataSource"},"glyph":{"id":"8106","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y1","nonselection_glyph":{"id":"8107","type":"VArea"},"selection_glyph":null,"view":{"id":"8109","type":"CDSView"}},"id":"8108","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[62,62,72,86,20,69,22,41,65,39,38,46,70,85,52],"y1":[82,70,48,28,19,32,91,94,20,22,80,53,92,95,45],"y2":[89,99,85,90,24,41,87,59,12,21,37,95,16,14,71],"y3":[15,65,88,94,64,70,84,54,86,46,77,44,49,84,34],"y4":[87,17,83,59,51,37,63,84,53,66,59,71,18,68,91],"y5":[26,16,15,74,79,68,28,71,20,79,70,16,63,16,12],"y6":[69,66,23,62,77,31,63,49,87,79,74,83,66,42,32],"y7":[27,57,32,34,20,70,59,99,43,68,93,14,44,24,81],"y8":[23,21,63,99,78,36,32,72,98,17,17,32,30,60,48],"y9":[35,81,50,11,10,65,57,86,55,64,74,37,82,40,29]},"selected":{"id":"8116","type":"Selection"},"selection_policy":{"id":"8117","type":"UnionRenderers"}},"id":"8089","type":"ColumnDataSource"},{"attributes":{},"id":"8047","type":"BasicTicker"},{"attributes":{},"id":"8254","type":"Selection"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[62,62,72,86,20,69,22,41,65,39,38,46,70,85,52],"y1":[82,70,48,28,19,32,91,94,20,22,80,53,92,95,45],"y2":[89,99,85,90,24,41,87,59,12,21,37,95,16,14,71],"y3":[15,65,88,94,64,70,84,54,86,46,77,44,49,84,34],"y4":[87,17,83,59,51,37,63,84,53,66,59,71,18,68,91],"y5":[26,16,15,74,79,68,28,71,20,79,70,16,63,16,12],"y6":[69,66,23,62,77,31,63,49,87,79,74,83,66,42,32],"y7":[27,57,32,34,20,70,59,99,43,68,93,14,44,24,81],"y8":[23,21,63,99,78,36,32,72,98,17,17,32,30,60,48],"y9":[35,81,50,11,10,65,57,86,55,64,74,37,82,40,29]},"selected":{"id":"8200","type":"Selection"},"selection_policy":{"id":"8201","type":"UnionRenderers"}},"id":"8158","type":"ColumnDataSource"},{"attributes":{"fill_color":"#fdae61","x":{"field":"index"},"y1":{"expr":{"id":"8081","type":"Stack"}},"y2":{"expr":{"id":"8082","type":"Stack"}}},"id":"8206","type":"VArea"},{"attributes":{"minor_grid_line_color":"#eeeeee","ticker":{"id":"8047","type":"BasicTicker"}},"id":"8050","type":"Grid"},{"attributes":{"source":{"id":"8230","type":"ColumnDataSource"}},"id":"8235","type":"CDSView"},{"attributes":{"label":{"value":"y9"},"renderers":[{"id":"8292","type":"GlyphRenderer"}]},"id":"8319","type":"LegendItem"},{"attributes":{"items":[{"id":"8319","type":"LegendItem"},{"id":"8287","type":"LegendItem"},{"id":"8257","type":"LegendItem"},{"id":"8229","type":"LegendItem"},{"id":"8203","type":"LegendItem"},{"id":"8179","type":"LegendItem"},{"id":"8157","type":"LegendItem"},{"id":"8137","type":"LegendItem"},{"id":"8119","type":"LegendItem"},{"id":"8103","type":"LegendItem"}]},"id":"8102","type":"Legend"},{"attributes":{"fields":["y0"]},"id":"8071","type":"Stack"},{"attributes":{},"id":"8255","type":"UnionRenderers"},{"attributes":{},"id":"8344","type":"Selection"},{"attributes":{},"id":"8176","type":"Selection"},{"attributes":{"data_source":{"id":"8204","type":"ColumnDataSource"},"glyph":{"id":"8206","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y6","nonselection_glyph":{"id":"8207","type":"VArea"},"selection_glyph":null,"view":{"id":"8209","type":"CDSView"}},"id":"8208","type":"GlyphRenderer"},{"attributes":{"dimension":1,"minor_grid_line_color":"#eeeeee","ticker":{"id":"8052","type":"BasicTicker"}},"id":"8055","type":"Grid"},{"attributes":{"source":{"id":"8158","type":"ColumnDataSource"}},"id":"8163","type":"CDSView"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[62,62,72,86,20,69,22,41,65,39,38,46,70,85,52],"y1":[82,70,48,28,19,32,91,94,20,22,80,53,92,95,45],"y2":[89,99,85,90,24,41,87,59,12,21,37,95,16,14,71],"y3":[15,65,88,94,64,70,84,54,86,46,77,44,49,84,34],"y4":[87,17,83,59,51,37,63,84,53,66,59,71,18,68,91],"y5":[26,16,15,74,79,68,28,71,20,79,70,16,63,16,12],"y6":[69,66,23,62,77,31,63,49,87,79,74,83,66,42,32],"y7":[27,57,32,34,20,70,59,99,43,68,93,14,44,24,81],"y8":[23,21,63,99,78,36,32,72,98,17,17,32,30,60,48],"y9":[35,81,50,11,10,65,57,86,55,64,74,37,82,40,29]},"selected":{"id":"8134","type":"Selection"},"selection_policy":{"id":"8135","type":"UnionRenderers"}},"id":"8104","type":"ColumnDataSource"},{"attributes":{},"id":"8345","type":"UnionRenderers"},{"attributes":{"fields":["y0","y1","y2","y3","y4"]},"id":"8078","type":"Stack"},{"attributes":{},"id":"8177","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"8230","type":"ColumnDataSource"},"glyph":{"id":"8232","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y7","nonselection_glyph":{"id":"8233","type":"VArea"},"selection_glyph":null,"view":{"id":"8235","type":"CDSView"}},"id":"8234","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8083","type":"Stack"}},"y2":{"expr":{"id":"8084","type":"Stack"}}},"id":"8233","type":"VArea"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6"]},"id":"8083","type":"Stack"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8071","type":"Stack"}},"y2":{"expr":{"id":"8072","type":"Stack"}}},"id":"8107","type":"VArea"},{"attributes":{"fields":["y0","y1","y2","y3"]},"id":"8077","type":"Stack"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8073","type":"Stack"}},"y2":{"expr":{"id":"8074","type":"Stack"}}},"id":"8123","type":"VArea"},{"attributes":{"data_source":{"id":"8158","type":"ColumnDataSource"},"glyph":{"id":"8160","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y4","nonselection_glyph":{"id":"8161","type":"VArea"},"selection_glyph":null,"view":{"id":"8163","type":"CDSView"}},"id":"8162","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y7"},"renderers":[{"id":"8234","type":"GlyphRenderer"}]},"id":"8257","type":"LegendItem"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8077","type":"Stack"}},"y2":{"expr":{"id":"8078","type":"Stack"}}},"id":"8161","type":"VArea"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5"]},"id":"8081","type":"Stack"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[62,62,72,86,20,69,22,41,65,39,38,46,70,85,52],"y1":[82,70,48,28,19,32,91,94,20,22,80,53,92,95,45],"y2":[89,99,85,90,24,41,87,59,12,21,37,95,16,14,71],"y3":[15,65,88,94,64,70,84,54,86,46,77,44,49,84,34],"y4":[87,17,83,59,51,37,63,84,53,66,59,71,18,68,91],"y5":[26,16,15,74,79,68,28,71,20,79,70,16,63,16,12],"y6":[69,66,23,62,77,31,63,49,87,79,74,83,66,42,32],"y7":[27,57,32,34,20,70,59,99,43,68,93,14,44,24,81],"y8":[23,21,63,99,78,36,32,72,98,17,17,32,30,60,48],"y9":[35,81,50,11,10,65,57,86,55,64,74,37,82,40,29]},"selected":{"id":"8254","type":"Selection"},"selection_policy":{"id":"8255","type":"UnionRenderers"}},"id":"8204","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[62,62,72,86,20,69,22,41,65,39,38,46,70,85,52],"y1":[82,70,48,28,19,32,91,94,20,22,80,53,92,95,45],"y2":[89,99,85,90,24,41,87,59,12,21,37,95,16,14,71],"y3":[15,65,88,94,64,70,84,54,86,46,77,44,49,84,34],"y4":[87,17,83,59,51,37,63,84,53,66,59,71,18,68,91],"y5":[26,16,15,74,79,68,28,71,20,79,70,16,63,16,12],"y6":[69,66,23,62,77,31,63,49,87,79,74,83,66,42,32],"y7":[27,57,32,34,20,70,59,99,43,68,93,14,44,24,81],"y8":[23,21,63,99,78,36,32,72,98,17,17,32,30,60,48],"y9":[35,81,50,11,10,65,57,86,55,64,74,37,82,40,29]},"selected":{"id":"8154","type":"Selection"},"selection_policy":{"id":"8155","type":"UnionRenderers"}},"id":"8120","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8081","type":"Stack"}},"y2":{"expr":{"id":"8082","type":"Stack"}}},"id":"8207","type":"VArea"},{"attributes":{"fields":["y0","y1","y2"]},"id":"8074","type":"Stack"},{"attributes":{"source":{"id":"8104","type":"ColumnDataSource"}},"id":"8109","type":"CDSView"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","x":{"field":"index"},"y1":{"expr":{"id":"8085","type":"Stack"}},"y2":{"expr":{"id":"8086","type":"Stack"}}},"id":"8261","type":"VArea"},{"attributes":{"fields":["y0","y1","y2","y3","y4","y5","y6","y7","y8"]},"id":"8087","type":"Stack"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[62,62,72,86,20,69,22,41,65,39,38,46,70,85,52],"y1":[82,70,48,28,19,32,91,94,20,22,80,53,92,95,45],"y2":[89,99,85,90,24,41,87,59,12,21,37,95,16,14,71],"y3":[15,65,88,94,64,70,84,54,86,46,77,44,49,84,34],"y4":[87,17,83,59,51,37,63,84,53,66,59,71,18,68,91],"y5":[26,16,15,74,79,68,28,71,20,79,70,16,63,16,12],"y6":[69,66,23,62,77,31,63,49,87,79,74,83,66,42,32],"y7":[27,57,32,34,20,70,59,99,43,68,93,14,44,24,81],"y8":[23,21,63,99,78,36,32,72,98,17,17,32,30,60,48],"y9":[35,81,50,11,10,65,57,86,55,64,74,37,82,40,29]},"selected":{"id":"8316","type":"Selection"},"selection_policy":{"id":"8317","type":"UnionRenderers"}},"id":"8258","type":"ColumnDataSource"},{"attributes":{"label":{"value":"y4"},"renderers":[{"id":"8162","type":"GlyphRenderer"}]},"id":"8179","type":"LegendItem"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[62,62,72,86,20,69,22,41,65,39,38,46,70,85,52],"y1":[82,70,48,28,19,32,91,94,20,22,80,53,92,95,45],"y2":[89,99,85,90,24,41,87,59,12,21,37,95,16,14,71],"y3":[15,65,88,94,64,70,84,54,86,46,77,44,49,84,34],"y4":[87,17,83,59,51,37,63,84,53,66,59,71,18,68,91],"y5":[26,16,15,74,79,68,28,71,20,79,70,16,63,16,12],"y6":[69,66,23,62,77,31,63,49,87,79,74,83,66,42,32],"y7":[27,57,32,34,20,70,59,99,43,68,93,14,44,24,81],"y8":[23,21,63,99,78,36,32,72,98,17,17,32,30,60,48],"y9":[35,81,50,11,10,65,57,86,55,64,74,37,82,40,29]},"selected":{"id":"8344","type":"Selection"},"selection_policy":{"id":"8345","type":"UnionRenderers"}},"id":"8288","type":"ColumnDataSource"},{"attributes":{"fill_color":"#9e0142","x":{"field":"index"},"y1":{"expr":{"id":"8087","type":"Stack"}},"y2":{"expr":{"id":"8088","type":"Stack"}}},"id":"8290","type":"VArea"},{"attributes":{"data_source":{"id":"8258","type":"ColumnDataSource"},"glyph":{"id":"8260","type":"VArea"},"hover_glyph":null,"muted_glyph":null,"name":"y8","nonselection_glyph":{"id":"8261","type":"VArea"},"selection_glyph":null,"view":{"id":"8263","type":"CDSView"}},"id":"8262","type":"GlyphRenderer"},{"attributes":{},"id":"8098","type":"BasicTickFormatter"},{"attributes":{},"id":"8061","type":"HelpTool"},{"attributes":{"callback":null,"data":{"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"y0":[62,62,72,86,20,69,22,41,65,39,38,46,70,85,52],"y1":[82,70,48,28,19,32,91,94,20,22,80,53,92,95,45],"y2":[89,99,85,90,24,41,87,59,12,21,37,95,16,14,71],"y3":[15,65,88,94,64,70,84,54,86,46,77,44,49,84,34],"y4":[87,17,83,59,51,37,63,84,53,66,59,71,18,68,91],"y5":[26,16,15,74,79,68,28,71,20,79,70,16,63,16,12],"y6":[69,66,23,62,77,31,63,49,87,79,74,83,66,42,32],"y7":[27,57,32,34,20,70,59,99,43,68,93,14,44,24,81],"y8":[23,21,63,99,78,36,32,72,98,17,17,32,30,60,48],"y9":[35,81,50,11,10,65,57,86,55,64,74,37,82,40,29]},"selected":{"id":"8226","type":"Selection"},"selection_policy":{"id":"8227","type":"UnionRenderers"}},"id":"8180","type":"ColumnDataSource"},{"attributes":{},"id":"8284","type":"Selection"},{"attributes":{"fill_color":"#fee08b","x":{"field":"index"},"y1":{"expr":{"id":"8079","type":"Stack"}},"y2":{"expr":{"id":"8080","type":"Stack"}}},"id":"8182","type":"VArea"},{"attributes":{"label":{"value":"y5"},"renderers":[{"id":"8184","type":"GlyphRenderer"}]},"id":"8203","type":"LegendItem"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8101","type":"BoxAnnotation"},{"attributes":{"text":""},"id":"8096","type":"Title"},{"attributes":{"callback":null,"end":14},"id":"8038","type":"Range1d"}],"root_ids":["8037"]},"title":"Bokeh Application","version":"1.3.5dev1-8-gf3910e406-dirty"}}';
                  var render_items = [{"docid":"f6dd2aa8-4e20-4a16-9b1e-3068829eb4d4","roots":{"8037":"2c06bf41-2e54-49d7-842e-da0f3dd9410b"}}];
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
        
        
        }
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