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
      };var element = document.getElementById("96c3509f-10ea-4c26-b150-bda965c15b32");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '96c3509f-10ea-4c26-b150-bda965c15b32' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"ef19bcee-d1fe-4d47-8a75-574197e9016f":{"roots":{"references":[{"attributes":{},"id":"7bc9b4a5-fe3a-4185-a4bd-e0bd2123583d","type":"BasicTickFormatter"},{"attributes":{},"id":"27be4ced-62a5-4a1f-96cb-f964f7d884d4","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"9ff439c6-6c55-421b-87d1-35d4c109477b","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"4a5ae394-2a77-448f-b944-5c9ed4e45538","type":"DataRange1d"},{"attributes":{},"id":"a55e0678-6845-44eb-a238-baf8bf270550","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"91b6e038-3d92-4dd4-abe3-0334de1690f4","type":"Plot"},"ticker":{"id":"15ab8034-4f5f-4b27-b696-93c89e9ab37d","type":"BasicTicker"}},"id":"e205ff03-6bbd-401b-bc8a-77a2ba90bd83","type":"Grid"},{"attributes":{"data_source":{"id":"9ff439c6-6c55-421b-87d1-35d4c109477b","type":"ColumnDataSource"},"glyph":{"id":"1019ce3c-21fa-48de-a78d-7714bf68248f","type":"Asterisk"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"14072948-af20-40bd-9be5-430d521caf5f","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"856b8850-ae8e-49da-abcb-e84effddf4f0","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"11e7012b-cffc-4b2a-ae86-cfbdef31ebb2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"14072948-af20-40bd-9be5-430d521caf5f","type":"GlyphRenderer"},{"id":"856b8850-ae8e-49da-abcb-e84effddf4f0","type":"LinearAxis"},{"id":"11e7012b-cffc-4b2a-ae86-cfbdef31ebb2","type":"LinearAxis"},{"id":"e205ff03-6bbd-401b-bc8a-77a2ba90bd83","type":"Grid"},{"id":"9b85e647-d6fb-463d-a3e2-2bcd3bdc17b3","type":"Grid"}],"title":null,"tool_events":{"id":"27be4ced-62a5-4a1f-96cb-f964f7d884d4","type":"ToolEvents"},"toolbar":{"id":"88d89a97-858a-44c3-98e2-3d6be986b6fa","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4a5ae394-2a77-448f-b944-5c9ed4e45538","type":"DataRange1d"},"y_range":{"id":"43c2a39b-58ef-4ffa-a6b3-ca0fc5623dbb","type":"DataRange1d"}},"id":"91b6e038-3d92-4dd4-abe3-0334de1690f4","type":"Plot"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#f0027f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1019ce3c-21fa-48de-a78d-7714bf68248f","type":"Asterisk"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"88d89a97-858a-44c3-98e2-3d6be986b6fa","type":"Toolbar"},{"attributes":{},"id":"3ad1c463-2ce2-4463-b5b8-80872540a2e0","type":"BasicTicker"},{"attributes":{"formatter":{"id":"7bc9b4a5-fe3a-4185-a4bd-e0bd2123583d","type":"BasicTickFormatter"},"plot":{"id":"91b6e038-3d92-4dd4-abe3-0334de1690f4","type":"Plot"},"ticker":{"id":"15ab8034-4f5f-4b27-b696-93c89e9ab37d","type":"BasicTicker"}},"id":"856b8850-ae8e-49da-abcb-e84effddf4f0","type":"LinearAxis"},{"attributes":{"callback":null},"id":"43c2a39b-58ef-4ffa-a6b3-ca0fc5623dbb","type":"DataRange1d"},{"attributes":{},"id":"15ab8034-4f5f-4b27-b696-93c89e9ab37d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"91b6e038-3d92-4dd4-abe3-0334de1690f4","type":"Plot"},"ticker":{"id":"3ad1c463-2ce2-4463-b5b8-80872540a2e0","type":"BasicTicker"}},"id":"9b85e647-d6fb-463d-a3e2-2bcd3bdc17b3","type":"Grid"},{"attributes":{"formatter":{"id":"a55e0678-6845-44eb-a238-baf8bf270550","type":"BasicTickFormatter"},"plot":{"id":"91b6e038-3d92-4dd4-abe3-0334de1690f4","type":"Plot"},"ticker":{"id":"3ad1c463-2ce2-4463-b5b8-80872540a2e0","type":"BasicTicker"}},"id":"11e7012b-cffc-4b2a-ae86-cfbdef31ebb2","type":"LinearAxis"}],"root_ids":["91b6e038-3d92-4dd4-abe3-0334de1690f4"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"ef19bcee-d1fe-4d47-8a75-574197e9016f","elementid":"96c3509f-10ea-4c26-b150-bda965c15b32","modelid":"91b6e038-3d92-4dd4-abe3-0334de1690f4"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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