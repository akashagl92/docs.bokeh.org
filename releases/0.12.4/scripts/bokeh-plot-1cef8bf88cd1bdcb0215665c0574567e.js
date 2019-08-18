(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("9432e43c-ed48-40da-9b02-4132d6b4f5b2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9432e43c-ed48-40da-9b02-4132d6b4f5b2' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"787f9d1d-7997-46c4-aaba-70af1aa07ebf":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"8a6adb61-7f8d-447a-bac0-48ddafe014c9","type":"Rect"},{"attributes":{"plot":null,"text":""},"id":"b7c64f24-a9ed-4242-b113-1837ed771854","type":"Title"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"328f4c71-f09d-4fdb-92cf-54458dd8ca74","type":"Segment"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"759e9bc9-97d6-424d-b906-158e9a15ce6b","type":"Segment"},{"attributes":{},"id":"0c6aacba-6e28-4b93-b644-4c938c342f22","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"722da899-a47d-4efe-9b3d-01b0279d7b42","type":"Rect"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"fe2b41f0-c92d-4565-8820-79406750216c","type":"CategoricalAxis"}],"left":[{"id":"948f4dd0-29c4-4928-8872-ed949d936908","type":"LinearAxis"}],"renderers":[{"id":"fe2b41f0-c92d-4565-8820-79406750216c","type":"CategoricalAxis"},{"id":"4242e778-16e7-4f89-8dcd-f2064a50196e","type":"Grid"},{"id":"948f4dd0-29c4-4928-8872-ed949d936908","type":"LinearAxis"},{"id":"c3bd0884-3a95-4506-b2fd-2f59b4de6ece","type":"Grid"},{"id":"08189c99-7a63-44ec-8aec-3f0e74fe207d","type":"GlyphRenderer"},{"id":"d0d498d0-86c9-4894-8393-e623e7388f9d","type":"GlyphRenderer"},{"id":"7327e9ca-7baa-4649-b5bd-f3861514bd25","type":"GlyphRenderer"},{"id":"fa084e73-a068-4795-8644-03f706615f6a","type":"GlyphRenderer"},{"id":"3233fc2d-5993-4048-b074-6a09a123bae5","type":"GlyphRenderer"},{"id":"f88a4391-9c5b-4f88-bfcb-d13c034b6bbf","type":"GlyphRenderer"},{"id":"9bc346f8-9d32-4789-b47f-90f90a524535","type":"GlyphRenderer"}],"title":{"id":"b7c64f24-a9ed-4242-b113-1837ed771854","type":"Title"},"tool_events":{"id":"e1c6e6ca-b50a-4466-8e13-2e6217e2d915","type":"ToolEvents"},"toolbar":{"id":"259754f7-8231-400f-93a6-37aca885d646","type":"Toolbar"},"x_range":{"id":"129ac1f8-ba56-42d1-94d5-004709e9d371","type":"FactorRange"},"y_range":{"id":"06683aad-2f87-4693-a932-c5ff9676caed","type":"DataRange1d"}},"id":"43431c9e-1de2-44a9-85fc-7e861d1e8f93","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e1c6e6ca-b50a-4466-8e13-2e6217e2d915","type":"ToolEvents"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"43431c9e-1de2-44a9-85fc-7e861d1e8f93","subtype":"Figure","type":"Plot"},"ticker":{"id":"7457c600-aee0-41c2-a415-8a6893fd7dbb","type":"CategoricalTicker"}},"id":"4242e778-16e7-4f89-8dcd-f2064a50196e","type":"Grid"},{"attributes":{"data_source":{"id":"bc42df36-928f-49d6-b7d3-14831b5cf504","type":"ColumnDataSource"},"glyph":{"id":"aebeb56d-5527-4a4a-bff3-1a0b486d1606","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d3ccb57a-1596-4a24-9d9a-fd98c6fc9c3b","type":"Circle"},"selection_glyph":null},"id":"9bc346f8-9d32-4789-b47f-90f90a524535","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"43431c9e-1de2-44a9-85fc-7e861d1e8f93","subtype":"Figure","type":"Plot"}},"id":"7f91bcd3-2ef2-49cd-966b-7103165059a0","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x0","x1","y0","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"/xqb5++0BkCyvsndjgIFQNJZtkH7eQtA5G1PJKXtCkCQFzIPOwkSQGbjgvIseBFA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"NEcu8YU55z87mL6O4WziP4pLupskcvk/5zzJeMV4+j/ivSScMf0EQLUCxUhNtQRA","dtype":"float64","shape":[6]}}},"id":"03e07fbe-d006-4f3d-9db6-07222ef6eb16","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"deb834ac-58ae-4527-abc1-6f2e2ef41615","type":"ColumnDataSource"},"glyph":{"id":"328f4c71-f09d-4fdb-92cf-54458dd8ca74","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"2721c05f-0496-434a-9a64-3084cfe622dc","type":"Segment"},"selection_glyph":null},"id":"d0d498d0-86c9-4894-8393-e623e7388f9d","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"2721c05f-0496-434a-9a64-3084cfe622dc","type":"Segment"},{"attributes":{"callback":null,"column_names":["x","bottom","top"],"data":{"bottom":{"__ndarray__":"NEcu8YU55z87mL6O4WziP4pLupskcvk/5zzJeMV4+j/ivSScMf0EQLUCxUhNtQRA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"nVcYaAaziL8+RKPOvn+wv9pyu3bpg/A/eOkTP+1f7z8nojoZ3Rz/Pw5biQNrCQBA","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"f0d531d6-4f8d-4fd7-bf7a-61a4b725445b","type":"ColumnDataSource"},{"attributes":{},"id":"625f28cc-7f98-4e3c-b57a-760fa9aa93e8","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"03e07fbe-d006-4f3d-9db6-07222ef6eb16","type":"ColumnDataSource"},"glyph":{"id":"759e9bc9-97d6-424d-b906-158e9a15ce6b","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"0e5ac70f-75e9-4f1f-9534-1e6c96e1f978","type":"Segment"},"selection_glyph":null},"id":"08189c99-7a63-44ec-8aec-3f0e74fe207d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x0","x1","y0","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"i1jnL0OQBsBW2HsSrbsGwEy3GZGOu/e/WbG5yVVe/b+4OZ5+dyfkv4TLjDKTE9i/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"i/zvu7Qq5r/M/oZhWlHpvznDYloNGdc/m6mGReqK0D/mTQRdZn/yP0xV3ms0cfY/","dtype":"float64","shape":[6]}}},"id":"deb834ac-58ae-4527-abc1-6f2e2ef41615","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"cf559f0c-04aa-465b-9dbf-96a556b11038","type":"VBar"},{"attributes":{},"id":"7457c600-aee0-41c2-a415-8a6893fd7dbb","type":"CategoricalTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"7c49c844-bc57-4a06-8ec9-5a632ed2d036","type":"VBar"},{"attributes":{},"id":"3c1fa3ed-0c90-48a0-9d15-13f0c7b54116","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fde75e39-9259-4cd0-862c-d8c72c6ac426","type":"Rect"},{"attributes":{"data_source":{"id":"f9941f51-e36e-48d5-b8fc-2ce5cc34936a","type":"ColumnDataSource"},"glyph":{"id":"7c49c844-bc57-4a06-8ec9-5a632ed2d036","type":"VBar"},"hover_glyph":null,"nonselection_glyph":{"id":"cf559f0c-04aa-465b-9dbf-96a556b11038","type":"VBar"},"selection_glyph":null},"id":"fa084e73-a068-4795-8644-03f706615f6a","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"aab4ccd7-3819-490e-adaf-3df9a696874d","type":"VBar"},{"attributes":{"data_source":{"id":"da779921-3e66-4892-9785-173af7eed337","type":"ColumnDataSource"},"glyph":{"id":"8a6adb61-7f8d-447a-bac0-48ddafe014c9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"722da899-a47d-4efe-9b3d-01b0279d7b42","type":"Rect"},"selection_glyph":null},"id":"f88a4391-9c5b-4f88-bfcb-d13c034b6bbf","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"aebeb56d-5527-4a4a-bff3-1a0b486d1606","type":"Circle"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"633485ec-55d7-4456-baf1-c69d8058240d","type":"VBar"},{"attributes":{"formatter":{"id":"625f28cc-7f98-4e3c-b57a-760fa9aa93e8","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"43431c9e-1de2-44a9-85fc-7e861d1e8f93","subtype":"Figure","type":"Plot"},"ticker":{"id":"7457c600-aee0-41c2-a415-8a6893fd7dbb","type":"CategoricalTicker"}},"id":"fe2b41f0-c92d-4565-8820-79406750216c","type":"CategoricalAxis"},{"attributes":{"callback":null},"id":"06683aad-2f87-4693-a932-c5ff9676caed","type":"DataRange1d"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"43431c9e-1de2-44a9-85fc-7e861d1e8f93","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c6aacba-6e28-4b93-b644-4c938c342f22","type":"BasicTicker"}},"id":"c3bd0884-3a95-4506-b2fd-2f59b4de6ece","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"d3ccb57a-1596-4a24-9d9a-fd98c6fc9c3b","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"0e5ac70f-75e9-4f1f-9534-1e6c96e1f978","type":"Segment"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7f91bcd3-2ef2-49cd-966b-7103165059a0","type":"SaveTool"}]},"id":"259754f7-8231-400f-93a6-37aca885d646","type":"Toolbar"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"129ac1f8-ba56-42d1-94d5-004709e9d371","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["x","bottom","top"],"data":{"bottom":{"__ndarray__":"nVcYaAaziL8+RKPOvn+wv9pyu3bpg/A/eOkTP+1f7z8nojoZ3Rz/Pw5biQNrCQBA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"i/zvu7Qq5r/M/oZhWlHpvznDYloNGdc/m6mGReqK0D/mTQRdZn/yP0xV3ms0cfY/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"f9941f51-e36e-48d5-b8fc-2ce5cc34936a","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"baf04c82-ce9a-4b86-9355-4a24a4f2c7e0","type":"Rect"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"/xqb5++0BkCyvsndjgIFQNJZtkH7eQtA5G1PJKXtCkCQFzIPOwkSQGbjgvIseBFA","dtype":"float64","shape":[6]}}},"id":"da779921-3e66-4892-9785-173af7eed337","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"f0d531d6-4f8d-4fd7-bf7a-61a4b725445b","type":"ColumnDataSource"},"glyph":{"id":"633485ec-55d7-4456-baf1-c69d8058240d","type":"VBar"},"hover_glyph":null,"nonselection_glyph":{"id":"aab4ccd7-3819-490e-adaf-3df9a696874d","type":"VBar"},"selection_glyph":null},"id":"7327e9ca-7baa-4649-b5bd-f3861514bd25","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","a","a","b","b","b","b","c","c","c","c","c","d","d","f","f","f","f"],"y":[-2.886971889521858,-3.1088309408854338,-3.17797903814923,-3.355259759677214,-3.510816534340016,2.9508591936763278,2.696648685010528,3.454513421973193,3.8421822346957484,3.7139848821184662,-1.5976333995949474,3.7470196545096264,-1.84280950562936,-2.04879766400778,5.1637319778256625,4.445575664425331,-0.6327416383061082,4.62745534346142]}},"id":"bc42df36-928f-49d6-b7d3-14831b5cf504","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"3c1fa3ed-0c90-48a0-9d15-13f0c7b54116","type":"BasicTickFormatter"},"plot":{"id":"43431c9e-1de2-44a9-85fc-7e861d1e8f93","subtype":"Figure","type":"Plot"},"ticker":{"id":"0c6aacba-6e28-4b93-b644-4c938c342f22","type":"BasicTicker"}},"id":"948f4dd0-29c4-4928-8872-ed949d936908","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"i1jnL0OQBsBW2HsSrbsGwEy3GZGOu/e/WbG5yVVe/b+4OZ5+dyfkv4TLjDKTE9i/","dtype":"float64","shape":[6]}}},"id":"33e53694-372e-4953-b998-106fc53c1ec4","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"33e53694-372e-4953-b998-106fc53c1ec4","type":"ColumnDataSource"},"glyph":{"id":"baf04c82-ce9a-4b86-9355-4a24a4f2c7e0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"fde75e39-9259-4cd0-862c-d8c72c6ac426","type":"Rect"},"selection_glyph":null},"id":"3233fc2d-5993-4048-b074-6a09a123bae5","type":"GlyphRenderer"}],"root_ids":["43431c9e-1de2-44a9-85fc-7e861d1e8f93"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"787f9d1d-7997-46c4-aaba-70af1aa07ebf","elementid":"9432e43c-ed48-40da-9b02-4132d6b4f5b2","modelid":"43431c9e-1de2-44a9-85fc-7e861d1e8f93"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
