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
      };var element = document.getElementById("f83c8c42-a480-4596-aa52-db29ea62267f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f83c8c42-a480-4596-aa52-db29ea62267f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"73840038-96e7-48e6-9f4e-f6a9ed7e3bba":{"roots":{"references":[{"attributes":{"data_source":{"id":"7be6f6fa-f5b7-4a92-ad39-1d490a4fd217","type":"ColumnDataSource"},"glyph":{"id":"5b3a258b-7ff5-481e-bf9b-a6decace8a37","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b9830e8d-70df-4782-91ac-0cdc260a1878","type":"Line"},"selection_glyph":null,"view":{"id":"4e1d9d52-988a-4520-bed9-ac9e1f5f9c31","type":"CDSView"}},"id":"8035fa17-23ad-40d2-9620-59b9f49fe2b7","type":"GlyphRenderer"},{"attributes":{"callback":null,"start":0},"id":"c3c6427b-3906-4522-944d-079911e5e744","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"ed41e77e-bcbf-4e02-a3e6-eec1523ff7f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f7274e5-c9fe-4d45-8ffd-7de2bd0a0a9c","type":"BasicTicker"}},"id":"8ab09a20-c994-488c-ab6c-86e8384b41bd","type":"Grid"},{"attributes":{"source":{"id":"7be6f6fa-f5b7-4a92-ad39-1d490a4fd217","type":"ColumnDataSource"}},"id":"4e1d9d52-988a-4520-bed9-ac9e1f5f9c31","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b9830e8d-70df-4782-91ac-0cdc260a1878","type":"Line"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[10,12,16,9,10,8,12,13,14,14,12,16],"x":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]]}},"id":"c0405987-3e54-47b4-9e1f-ce09cb9b77a2","type":"ColumnDataSource"},{"attributes":{"source":{"id":"c0405987-3e54-47b4-9e1f-ce09cb9b77a2","type":"ColumnDataSource"}},"id":"cb6ec3ae-ce2a-4573-bb27-fa514e9fee14","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"ed41e77e-bcbf-4e02-a3e6-eec1523ff7f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2605a8c-4b0d-4a81-ab58-52215d1b066b","type":"CategoricalTicker"}},"id":"91869d43-a929-4e1b-8e68-5a4a97092254","type":"Grid"},{"attributes":{"formatter":{"id":"9234ceeb-7c0d-4f3a-bcd6-004f10491888","type":"CategoricalTickFormatter"},"major_label_orientation":1,"plot":{"id":"ed41e77e-bcbf-4e02-a3e6-eec1523ff7f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"e2605a8c-4b0d-4a81-ab58-52215d1b066b","type":"CategoricalTicker"}},"id":"74d8ceaa-ef3c-406a-81a7-78c856bc1c9a","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["Q1","Q2","Q3","Q4"],"y":[12,9,13,14]}},"id":"7be6f6fa-f5b7-4a92-ad39-1d490a4fd217","type":"ColumnDataSource"},{"attributes":{},"id":"e2605a8c-4b0d-4a81-ab58-52215d1b066b","type":"CategoricalTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"02e28b08-ab74-4c97-91fc-314cf11eb4d7","type":"VBar"},{"attributes":{},"id":"f642feb8-fa4a-473e-ad1f-cd1070456fb8","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"74d8ceaa-ef3c-406a-81a7-78c856bc1c9a","type":"CategoricalAxis"}],"left":[{"id":"125ffd6a-ac16-4bea-ad49-deaa8e41b077","type":"LinearAxis"}],"plot_height":250,"renderers":[{"id":"74d8ceaa-ef3c-406a-81a7-78c856bc1c9a","type":"CategoricalAxis"},{"id":"91869d43-a929-4e1b-8e68-5a4a97092254","type":"Grid"},{"id":"125ffd6a-ac16-4bea-ad49-deaa8e41b077","type":"LinearAxis"},{"id":"8ab09a20-c994-488c-ab6c-86e8384b41bd","type":"Grid"},{"id":"fb35eb6b-0bfa-4d77-a5fc-5b57e86e6971","type":"GlyphRenderer"},{"id":"8035fa17-23ad-40d2-9620-59b9f49fe2b7","type":"GlyphRenderer"}],"title":{"id":"0bb5b60e-a4fa-4f41-b998-2fb3b75b8470","type":"Title"},"toolbar":{"id":"3c22709e-d4a2-4028-b86b-672da21faee9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"ae7e8837-b099-420c-b582-8bb89aa2c616","type":"FactorRange"},"x_scale":{"id":"c7eb0399-4e65-49fa-96a1-b5d8869cc5af","type":"CategoricalScale"},"y_range":{"id":"c3c6427b-3906-4522-944d-079911e5e744","type":"DataRange1d"},"y_scale":{"id":"03ebe4ea-dfc3-41a5-96a1-0afa5dbb223a","type":"LinearScale"}},"id":"ed41e77e-bcbf-4e02-a3e6-eec1523ff7f5","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"c0405987-3e54-47b4-9e1f-ce09cb9b77a2","type":"ColumnDataSource"},"glyph":{"id":"67b35a82-4bcd-4e85-b204-363ed641c62e","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"02e28b08-ab74-4c97-91fc-314cf11eb4d7","type":"VBar"},"selection_glyph":null,"view":{"id":"cb6ec3ae-ce2a-4573-bb27-fa514e9fee14","type":"CDSView"}},"id":"fb35eb6b-0bfa-4d77-a5fc-5b57e86e6971","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":[["Q1","jan"],["Q1","feb"],["Q1","mar"],["Q2","apr"],["Q2","may"],["Q2","jun"],["Q3","jul"],["Q3","aug"],["Q3","sep"],["Q4","oct"],["Q4","nov"],["Q4","dec"]],"range_padding":0.1},"id":"ae7e8837-b099-420c-b582-8bb89aa2c616","type":"FactorRange"},{"attributes":{"formatter":{"id":"f642feb8-fa4a-473e-ad1f-cd1070456fb8","type":"BasicTickFormatter"},"plot":{"id":"ed41e77e-bcbf-4e02-a3e6-eec1523ff7f5","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f7274e5-c9fe-4d45-8ffd-7de2bd0a0a9c","type":"BasicTicker"}},"id":"125ffd6a-ac16-4bea-ad49-deaa8e41b077","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3c22709e-d4a2-4028-b86b-672da21faee9","type":"Toolbar"},{"attributes":{},"id":"1f7274e5-c9fe-4d45-8ffd-7de2bd0a0a9c","type":"BasicTicker"},{"attributes":{},"id":"c7eb0399-4e65-49fa-96a1-b5d8869cc5af","type":"CategoricalScale"},{"attributes":{},"id":"03ebe4ea-dfc3-41a5-96a1-0afa5dbb223a","type":"LinearScale"},{"attributes":{},"id":"9234ceeb-7c0d-4f3a-bcd6-004f10491888","type":"CategoricalTickFormatter"},{"attributes":{"line_color":{"value":"red"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b3a258b-7ff5-481e-bf9b-a6decace8a37","type":"Line"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.9},"x":{"field":"x"}},"id":"67b35a82-4bcd-4e85-b204-363ed641c62e","type":"VBar"},{"attributes":{"plot":null,"text":""},"id":"0bb5b60e-a4fa-4f41-b998-2fb3b75b8470","type":"Title"}],"root_ids":["ed41e77e-bcbf-4e02-a3e6-eec1523ff7f5"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"73840038-96e7-48e6-9f4e-f6a9ed7e3bba","elementid":"f83c8c42-a480-4596-aa52-db29ea62267f","modelid":"ed41e77e-bcbf-4e02-a3e6-eec1523ff7f5"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
