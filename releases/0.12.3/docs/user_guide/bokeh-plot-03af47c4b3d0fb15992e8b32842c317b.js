document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("18d55638-e31f-43cb-99cb-02a210d129cd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '18d55638-e31f-43cb-99cb-02a210d129cd' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"09f9d58c-0270-4ff3-8be2-48dbf793e555":{"roots":{"references":[{"attributes":{"formatter":{"id":"465ccf58-57d1-42bb-adf8-87392afe1bf3","type":"BasicTickFormatter"},"plot":{"id":"c24c0be1-ebc1-40c2-8fa7-1a27dafe65a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d281842-6afc-470f-ac3e-fc91388ba424","type":"BasicTicker"}},"id":"4bfe3d0a-f675-4be0-a924-72ea2f084bd7","type":"LinearAxis"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"04fe2906-48d5-450d-98e3-3dc79c3bf99d","type":"GlyphRenderer"}]},"id":"6468146d-51a4-4a46-bc32-1d31248f3e32","type":"LegendItem"},{"attributes":{"data_source":{"id":"2676621e-4229-4eeb-acb7-520e4ceb949a","type":"ColumnDataSource"},"glyph":{"id":"4b9fb28a-ef35-4378-9879-e4ec727d7bc3","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"e8178fda-e017-4eda-bbd8-9f50c7b4f91b","type":"Circle"},"selection_glyph":null},"id":"04fe2906-48d5-450d-98e3-3dc79c3bf99d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c24c0be1-ebc1-40c2-8fa7-1a27dafe65a9","subtype":"Figure","type":"Plot"}},"id":"9da514b8-0fbf-4d3f-91a4-0cb0a64dac2a","type":"SaveTool"},{"attributes":{},"id":"29abf864-de50-4c8f-b98f-300a9765750b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3146618e-796c-4c5c-943a-eec6aae662bb","type":"BasicTickFormatter"},"plot":{"id":"c24c0be1-ebc1-40c2-8fa7-1a27dafe65a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"29abf864-de50-4c8f-b98f-300a9765750b","type":"BasicTicker"}},"id":"07ce0f33-2ae9-4bfd-84a6-8cccda32937e","type":"LinearAxis"},{"attributes":{"below":[{"id":"4bfe3d0a-f675-4be0-a924-72ea2f084bd7","type":"LinearAxis"}],"left":[{"id":"07ce0f33-2ae9-4bfd-84a6-8cccda32937e","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"4bfe3d0a-f675-4be0-a924-72ea2f084bd7","type":"LinearAxis"},{"id":"4a15b772-33a6-490a-8737-a0d76375ef5b","type":"Grid"},{"id":"07ce0f33-2ae9-4bfd-84a6-8cccda32937e","type":"LinearAxis"},{"id":"aa3718e9-cdfd-44ab-a9ff-6531a57bd487","type":"Grid"},{"id":"d9748843-c786-4190-8895-d47327d10040","type":"Legend"},{"id":"04fe2906-48d5-450d-98e3-3dc79c3bf99d","type":"GlyphRenderer"}],"title":{"id":"19e1bbb0-fc00-497c-9beb-a93d6876fc5a","type":"Title"},"tool_events":{"id":"6c39d70a-b23f-4912-8199-c2511fcb69ce","type":"ToolEvents"},"toolbar":{"id":"de9fcc9e-5d69-4b64-9744-a063530cbd4b","type":"Toolbar"},"x_range":{"id":"a98344a6-507e-4176-af8c-0f80ec261f69","type":"Range1d"},"y_range":{"id":"f1aaf232-61a5-497d-b437-3a04ce30491e","type":"Range1d"}},"id":"c24c0be1-ebc1-40c2-8fa7-1a27dafe65a9","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"c24c0be1-ebc1-40c2-8fa7-1a27dafe65a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"29abf864-de50-4c8f-b98f-300a9765750b","type":"BasicTicker"}},"id":"aa3718e9-cdfd-44ab-a9ff-6531a57bd487","type":"Grid"},{"attributes":{"plot":null,"text":null},"id":"19e1bbb0-fc00-497c-9beb-a93d6876fc5a","type":"Title"},{"attributes":{"items":[{"id":"6468146d-51a4-4a46-bc32-1d31248f3e32","type":"LegendItem"}],"plot":{"id":"c24c0be1-ebc1-40c2-8fa7-1a27dafe65a9","subtype":"Figure","type":"Plot"}},"id":"d9748843-c786-4190-8895-d47327d10040","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"e8178fda-e017-4eda-bbd8-9f50c7b4f91b","type":"Circle"},{"attributes":{"callback":null,"column_names":["color","y","label","x"],"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]}},"id":"2676621e-4229-4eeb-acb7-520e4ceb949a","type":"ColumnDataSource"},{"attributes":{},"id":"3146618e-796c-4c5c-943a-eec6aae662bb","type":"BasicTickFormatter"},{"attributes":{},"id":"8d281842-6afc-470f-ac3e-fc91388ba424","type":"BasicTicker"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b9fb28a-ef35-4378-9879-e4ec727d7bc3","type":"Circle"},{"attributes":{"callback":null,"end":3},"id":"f1aaf232-61a5-497d-b437-3a04ce30491e","type":"Range1d"},{"attributes":{"plot":{"id":"c24c0be1-ebc1-40c2-8fa7-1a27dafe65a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d281842-6afc-470f-ac3e-fc91388ba424","type":"BasicTicker"}},"id":"4a15b772-33a6-490a-8737-a0d76375ef5b","type":"Grid"},{"attributes":{},"id":"6c39d70a-b23f-4912-8199-c2511fcb69ce","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9da514b8-0fbf-4d3f-91a4-0cb0a64dac2a","type":"SaveTool"}]},"id":"de9fcc9e-5d69-4b64-9744-a063530cbd4b","type":"Toolbar"},{"attributes":{"callback":null,"end":7},"id":"a98344a6-507e-4176-af8c-0f80ec261f69","type":"Range1d"},{"attributes":{},"id":"465ccf58-57d1-42bb-adf8-87392afe1bf3","type":"BasicTickFormatter"}],"root_ids":["c24c0be1-ebc1-40c2-8fa7-1a27dafe65a9"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"09f9d58c-0270-4ff3-8be2-48dbf793e555","elementid":"18d55638-e31f-43cb-99cb-02a210d129cd","modelid":"c24c0be1-ebc1-40c2-8fa7-1a27dafe65a9"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
});