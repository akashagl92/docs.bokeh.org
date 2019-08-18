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
      };var element = document.getElementById("37c9856a-bd16-437f-a9b1-b2f3db3e10ec");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '37c9856a-bd16-437f-a9b1-b2f3db3e10ec' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
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
                    
                  var docs_json = '{"21fae285-cb43-4253-bc38-70369a964ff3":{"roots":{"references":[{"attributes":{"data_source":{"id":"b8f3e53a-2b2a-4749-80f4-1d2faa76d10f","type":"ColumnDataSource"},"glyph":{"id":"ad5b6de7-bf12-47b2-bed8-0f9f46788baa","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2378869e-9602-4d1d-859d-bbcdc5058280","type":"VBar"},"selection_glyph":null,"view":{"id":"b04043fe-f037-4d08-bfe0-dd3daaf43ccd","type":"CDSView"}},"id":"6daa8179-bfa8-44e4-a42d-dde46961a983","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9c49b58d-ce17-444a-ba8f-4ac965f9fafb","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"306774b2-903c-4940-b771-59d9676cd551","subtype":"Figure","type":"Plot"},"ticker":{"id":"f94b1baa-f859-4735-8f68-c04aa69c7bfb","type":"BasicTicker"}},"id":"52288723-f9e4-40d4-927e-2192f244e2ea","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]},"selected":null,"selection_policy":null},"id":"b8f3e53a-2b2a-4749-80f4-1d2faa76d10f","type":"ColumnDataSource"},{"attributes":{},"id":"2f677f77-8cf9-4cb6-af50-e2a904beff4a","type":"CategoricalScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"2378869e-9602-4d1d-859d-bbcdc5058280","type":"VBar"},{"attributes":{"line_color":"red","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"3bf6e2a0-7e1b-4c9c-a053-6abde4f3a10d","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]},"selected":null,"selection_policy":null},"id":"9bb564b9-d604-4512-a088-f140c1caeab6","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"d0146ba7-e0f4-4387-b1b5-bd2f4324633b","type":"Title"},{"attributes":{},"id":"f94b1baa-f859-4735-8f68-c04aa69c7bfb","type":"BasicTicker"},{"attributes":{"formatter":{"id":"252c0964-5287-4a21-9128-c2e5349d5339","type":"BasicTickFormatter"},"plot":{"id":"306774b2-903c-4940-b771-59d9676cd551","subtype":"Figure","type":"Plot"},"ticker":{"id":"f94b1baa-f859-4735-8f68-c04aa69c7bfb","type":"BasicTicker"}},"id":"6a3b3d26-fe19-422e-b2fe-2ce01edec4da","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"ad5b6de7-bf12-47b2-bed8-0f9f46788baa","type":"VBar"},{"attributes":{"source":{"id":"9bb564b9-d604-4512-a088-f140c1caeab6","type":"ColumnDataSource"}},"id":"6ea6d312-b613-48d9-b252-89e2c71b05ef","type":"CDSView"},{"attributes":{},"id":"abd306b4-f448-430a-9d71-4efec1717fa4","type":"LinearScale"},{"attributes":{"formatter":{"id":"3c9a1826-2ef8-435b-aa4d-af82350ee6ec","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"306774b2-903c-4940-b771-59d9676cd551","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2264a12-05aa-416e-9860-5e17a785d0a0","type":"CategoricalTicker"}},"id":"a84c67fc-6806-43a6-89dc-a2e4c58797c1","type":"CategoricalAxis"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"306774b2-903c-4940-b771-59d9676cd551","subtype":"Figure","type":"Plot"},"ticker":{"id":"a2264a12-05aa-416e-9860-5e17a785d0a0","type":"CategoricalTicker"}},"id":"cad4e82b-bc82-4285-9eca-240700508486","type":"Grid"},{"attributes":{"callback":null,"start":0},"id":"fcae2cce-32f9-4fe5-8251-40309e297fd3","type":"DataRange1d"},{"attributes":{},"id":"252c0964-5287-4a21-9128-c2e5349d5339","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"a84c67fc-6806-43a6-89dc-a2e4c58797c1","type":"CategoricalAxis"}],"left":[{"id":"6a3b3d26-fe19-422e-b2fe-2ce01edec4da","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"a84c67fc-6806-43a6-89dc-a2e4c58797c1","type":"CategoricalAxis"},{"id":"cad4e82b-bc82-4285-9eca-240700508486","type":"Grid"},{"id":"6a3b3d26-fe19-422e-b2fe-2ce01edec4da","type":"LinearAxis"},{"id":"52288723-f9e4-40d4-927e-2192f244e2ea","type":"Grid"},{"id":"6daa8179-bfa8-44e4-a42d-dde46961a983","type":"GlyphRenderer"},{"id":"2cc37d48-07ad-4e82-87af-e5520191f9e9","type":"GlyphRenderer"}],"title":{"id":"d0146ba7-e0f4-4387-b1b5-bd2f4324633b","type":"Title"},"toolbar":{"id":"9c49b58d-ce17-444a-ba8f-4ac965f9fafb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0dcb2245-8351-4664-b4f6-cc7c30e3eba7","type":"FactorRange"},"x_scale":{"id":"2f677f77-8cf9-4cb6-af50-e2a904beff4a","type":"CategoricalScale"},"y_range":{"id":"fcae2cce-32f9-4fe5-8251-40309e297fd3","type":"DataRange1d"},"y_scale":{"id":"abd306b4-f448-430a-9d71-4efec1717fa4","type":"LinearScale"}},"id":"306774b2-903c-4940-b771-59d9676cd551","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"b8f3e53a-2b2a-4749-80f4-1d2faa76d10f","type":"ColumnDataSource"}},"id":"b04043fe-f037-4d08-bfe0-dd3daaf43ccd","type":"CDSView"},{"attributes":{},"id":"a2264a12-05aa-416e-9860-5e17a785d0a0","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"9bb564b9-d604-4512-a088-f140c1caeab6","type":"ColumnDataSource"},"glyph":{"id":"3bf6e2a0-7e1b-4c9c-a053-6abde4f3a10d","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c04826ab-9fa7-46df-8c12-7885005914d0","type":"Line"},"selection_glyph":null,"view":{"id":"6ea6d312-b613-48d9-b252-89e2c71b05ef","type":"CDSView"}},"id":"2cc37d48-07ad-4e82-87af-e5520191f9e9","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"c04826ab-9fa7-46df-8c12-7885005914d0","type":"Line"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"0dcb2245-8351-4664-b4f6-cc7c30e3eba7","type":"FactorRange"},{"attributes":{},"id":"3c9a1826-2ef8-435b-aa4d-af82350ee6ec","type":"CategoricalTickFormatter"}],"root_ids":["306774b2-903c-4940-b771-59d9676cd551"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"21fae285-cb43-4253-bc38-70369a964ff3","elementid":"37c9856a-bd16-437f-a9b1-b2f3db3e10ec","modelid":"306774b2-903c-4940-b771-59d9676cd551"}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.15.min.css");
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