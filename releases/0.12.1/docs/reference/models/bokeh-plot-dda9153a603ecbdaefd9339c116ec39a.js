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
      };var element = document.getElementById("f8339052-bb76-4da0-88f3-2dd65e7dffad");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f8339052-bb76-4da0-88f3-2dd65e7dffad' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"c3b225f3-e455-4868-b291-3cc3574c79c9":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"bcf66514-dfd8-4dfe-bf75-4da2b7403fed","type":"Plot"},"ticker":{"id":"cb760937-a30b-4d46-a84b-b9a8f1838f6a","type":"BasicTicker"}},"id":"0f5e9016-870c-44f2-905d-c4463132a9ce","type":"Grid"},{"attributes":{},"id":"a65f7120-cf5a-4f96-89e8-e49ed3da2bac","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"78b6266c-6e75-4b29-9383-d67edde0d9f3","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"02581252-1fe0-4f92-b75e-654f749438db","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"7331d07a-a4fb-4535-8188-404060fd076d","type":"GlyphRenderer"},{"id":"78b6266c-6e75-4b29-9383-d67edde0d9f3","type":"LinearAxis"},{"id":"02581252-1fe0-4f92-b75e-654f749438db","type":"LinearAxis"},{"id":"9686aa1f-a557-4f34-bb88-c034964f6e28","type":"Grid"},{"id":"0f5e9016-870c-44f2-905d-c4463132a9ce","type":"Grid"}],"title":null,"tool_events":{"id":"7b8e400f-be1c-4354-8910-f865ef53a5e6","type":"ToolEvents"},"toolbar":{"id":"54c2d583-e9aa-490f-9497-9b44f52a343c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9bed9800-49b9-4aff-bcb0-040309e729f8","type":"DataRange1d"},"y_range":{"id":"b00cbc0c-2c7c-4196-819e-5f359599001d","type":"DataRange1d"}},"id":"bcf66514-dfd8-4dfe-bf75-4da2b7403fed","type":"Plot"},{"attributes":{},"id":"7b8e400f-be1c-4354-8910-f865ef53a5e6","type":"ToolEvents"},{"attributes":{"plot":{"id":"bcf66514-dfd8-4dfe-bf75-4da2b7403fed","type":"Plot"},"ticker":{"id":"c8f66511-8ef7-4ffc-a054-67f7b2ed321c","type":"BasicTicker"}},"id":"9686aa1f-a557-4f34-bb88-c034964f6e28","type":"Grid"},{"attributes":{"formatter":{"id":"d6346247-e895-43fb-a0c6-6f72576b5416","type":"BasicTickFormatter"},"plot":{"id":"bcf66514-dfd8-4dfe-bf75-4da2b7403fed","type":"Plot"},"ticker":{"id":"c8f66511-8ef7-4ffc-a054-67f7b2ed321c","type":"BasicTicker"}},"id":"78b6266c-6e75-4b29-9383-d67edde0d9f3","type":"LinearAxis"},{"attributes":{"callback":null},"id":"b00cbc0c-2c7c-4196-819e-5f359599001d","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"54c2d583-e9aa-490f-9497-9b44f52a343c","type":"Toolbar"},{"attributes":{},"id":"d6346247-e895-43fb-a0c6-6f72576b5416","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"9bed9800-49b9-4aff-bcb0-040309e729f8","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","text","x"],"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"a119e7e7-8032-430b-8a55-f906cb97d1df","type":"ColumnDataSource"},{"attributes":{},"id":"c8f66511-8ef7-4ffc-a054-67f7b2ed321c","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a65f7120-cf5a-4f96-89e8-e49ed3da2bac","type":"BasicTickFormatter"},"plot":{"id":"bcf66514-dfd8-4dfe-bf75-4da2b7403fed","type":"Plot"},"ticker":{"id":"cb760937-a30b-4d46-a84b-b9a8f1838f6a","type":"BasicTicker"}},"id":"02581252-1fe0-4f92-b75e-654f749438db","type":"LinearAxis"},{"attributes":{"data_source":{"id":"a119e7e7-8032-430b-8a55-f906cb97d1df","type":"ColumnDataSource"},"glyph":{"id":"fd14c706-b11e-444d-9e06-657be5be1025","type":"Text"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7331d07a-a4fb-4535-8188-404060fd076d","type":"GlyphRenderer"},{"attributes":{},"id":"cb760937-a30b-4d46-a84b-b9a8f1838f6a","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fd14c706-b11e-444d-9e06-657be5be1025","type":"Text"}],"root_ids":["bcf66514-dfd8-4dfe-bf75-4da2b7403fed"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"c3b225f3-e455-4868-b291-3cc3574c79c9","elementid":"f8339052-bb76-4da0-88f3-2dd65e7dffad","modelid":"bcf66514-dfd8-4dfe-bf75-4da2b7403fed"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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