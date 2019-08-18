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
      };var element = document.getElementById("e5d4b51c-6325-4c5f-94ee-39f3b40a642a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e5d4b51c-6325-4c5f-94ee-39f3b40a642a' but no matching script tag was found. ")
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
                  var docs_json = {"bd6cae82-1461-41e3-8e2f-75a6cf274dfe":{"roots":{"references":[{"attributes":{},"id":"f262d908-8cb3-4bbe-8a5f-43f80fa62ef1","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"800c804d-a4fb-472d-8b7d-2b5a890ff450","type":"BasicTickFormatter"},"plot":{"id":"49d99fa7-754c-4d1a-92c0-ce95c5882f09","type":"Plot"},"ticker":{"id":"1d20bf7f-a932-494b-beef-e7dfac2b433f","type":"BasicTicker"}},"id":"17e1fc6d-3ce1-4d1d-855f-421c0182d752","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#1c9099"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"bc70b459-f9f6-4b27-bf50-9f71d005c81d","type":"Diamond"},{"attributes":{"below":[{"id":"17e1fc6d-3ce1-4d1d-855f-421c0182d752","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"5c077fff-1e45-4c31-a654-a4cc0fa713a6","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"663e7be3-677f-4384-807c-9b72e5727551","type":"GlyphRenderer"},{"id":"17e1fc6d-3ce1-4d1d-855f-421c0182d752","type":"LinearAxis"},{"id":"5c077fff-1e45-4c31-a654-a4cc0fa713a6","type":"LinearAxis"},{"id":"e88f86dc-6735-4e1f-a022-df94c05057c1","type":"Grid"},{"id":"8ffbe790-67b3-44a3-aaea-dcd6cef996f3","type":"Grid"}],"title":null,"tool_events":{"id":"0e295b08-263a-44cc-b944-4bf62d5ac0f6","type":"ToolEvents"},"toolbar":{"id":"3bc15637-1c00-45b8-ad16-dbba36b8f4cd","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"910e856b-c320-461f-8d7f-edff8b4b649e","type":"DataRange1d"},"y_range":{"id":"3721cf0e-99f7-47d7-93e5-7a760e6a220d","type":"DataRange1d"}},"id":"49d99fa7-754c-4d1a-92c0-ce95c5882f09","type":"Plot"},{"attributes":{"callback":null},"id":"910e856b-c320-461f-8d7f-edff8b4b649e","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"d3446ffa-8368-45bb-933c-63b974f54c00","type":"ColumnDataSource"},{"attributes":{},"id":"02ce87e8-6917-45eb-8fb9-7e78b3eecbef","type":"BasicTicker"},{"attributes":{},"id":"1d20bf7f-a932-494b-beef-e7dfac2b433f","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3bc15637-1c00-45b8-ad16-dbba36b8f4cd","type":"Toolbar"},{"attributes":{"callback":null},"id":"3721cf0e-99f7-47d7-93e5-7a760e6a220d","type":"DataRange1d"},{"attributes":{},"id":"800c804d-a4fb-472d-8b7d-2b5a890ff450","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"49d99fa7-754c-4d1a-92c0-ce95c5882f09","type":"Plot"},"ticker":{"id":"1d20bf7f-a932-494b-beef-e7dfac2b433f","type":"BasicTicker"}},"id":"e88f86dc-6735-4e1f-a022-df94c05057c1","type":"Grid"},{"attributes":{},"id":"0e295b08-263a-44cc-b944-4bf62d5ac0f6","type":"ToolEvents"},{"attributes":{"formatter":{"id":"f262d908-8cb3-4bbe-8a5f-43f80fa62ef1","type":"BasicTickFormatter"},"plot":{"id":"49d99fa7-754c-4d1a-92c0-ce95c5882f09","type":"Plot"},"ticker":{"id":"02ce87e8-6917-45eb-8fb9-7e78b3eecbef","type":"BasicTicker"}},"id":"5c077fff-1e45-4c31-a654-a4cc0fa713a6","type":"LinearAxis"},{"attributes":{"data_source":{"id":"d3446ffa-8368-45bb-933c-63b974f54c00","type":"ColumnDataSource"},"glyph":{"id":"bc70b459-f9f6-4b27-bf50-9f71d005c81d","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"663e7be3-677f-4384-807c-9b72e5727551","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"49d99fa7-754c-4d1a-92c0-ce95c5882f09","type":"Plot"},"ticker":{"id":"02ce87e8-6917-45eb-8fb9-7e78b3eecbef","type":"BasicTicker"}},"id":"8ffbe790-67b3-44a3-aaea-dcd6cef996f3","type":"Grid"}],"root_ids":["49d99fa7-754c-4d1a-92c0-ce95c5882f09"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"bd6cae82-1461-41e3-8e2f-75a6cf274dfe","elementid":"e5d4b51c-6325-4c5f-94ee-39f3b40a642a","modelid":"49d99fa7-754c-4d1a-92c0-ce95c5882f09"}];
                  
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