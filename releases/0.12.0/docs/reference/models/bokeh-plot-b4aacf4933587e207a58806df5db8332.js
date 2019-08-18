document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("111cb2bd-e65f-4658-9794-25e33864318e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '111cb2bd-e65f-4658-9794-25e33864318e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6592df69-c275-4854-a220-773c89c59294":{"roots":{"references":[{"attributes":{"below":[{"id":"4d17cec2-c20c-4c32-a8f4-ddf9cabb8463","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f2df3c60-7fa2-4b3e-b425-4cb1566f671d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a440b9ed-1368-4c96-b25e-6d3e6c6bb73f","type":"GlyphRenderer"},{"id":"4d17cec2-c20c-4c32-a8f4-ddf9cabb8463","type":"LinearAxis"},{"id":"f2df3c60-7fa2-4b3e-b425-4cb1566f671d","type":"LinearAxis"},{"id":"b630548a-f0e1-450b-9536-d75b1dcc220a","type":"Grid"},{"id":"d17f57ab-968f-48f6-91b8-65a767d9f1bb","type":"Grid"}],"title":null,"tool_events":{"id":"4e71b6cf-7e09-4695-9108-d7ca5da7f043","type":"ToolEvents"},"toolbar":{"id":"4da2e151-8232-45b7-8c38-36a2967e0ced","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4112262f-b44a-4f87-8dcf-3a9ccf0ad9e7","type":"DataRange1d"},"y_range":{"id":"85eed29c-0787-4586-9bd3-89016af4f53a","type":"DataRange1d"}},"id":"fb044f93-0d35-4f98-ae50-cd611d17c76e","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4da2e151-8232-45b7-8c38-36a2967e0ced","type":"Toolbar"},{"attributes":{},"id":"4e71b6cf-7e09-4695-9108-d7ca5da7f043","type":"ToolEvents"},{"attributes":{"data_source":{"id":"4ec2cd2e-a559-4c8b-8c95-66b43b06c272","type":"ColumnDataSource"},"glyph":{"id":"16012d5f-03ee-4b34-afbb-cca5c2c1fc72","type":"CircleX"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a440b9ed-1368-4c96-b25e-6d3e6c6bb73f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"4ec2cd2e-a559-4c8b-8c95-66b43b06c272","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"4112262f-b44a-4f87-8dcf-3a9ccf0ad9e7","type":"DataRange1d"},{"attributes":{},"id":"f0cf99bf-3cdb-4334-8cfe-31fd031bdb06","type":"BasicTicker"},{"attributes":{"callback":null},"id":"85eed29c-0787-4586-9bd3-89016af4f53a","type":"DataRange1d"},{"attributes":{},"id":"b790c268-d4e4-4f08-9bde-c984380aa713","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"fb044f93-0d35-4f98-ae50-cd611d17c76e","type":"Plot"},"ticker":{"id":"ffbc42d2-0cb7-442b-9e21-d1e87ebde89b","type":"BasicTicker"}},"id":"d17f57ab-968f-48f6-91b8-65a767d9f1bb","type":"Grid"},{"attributes":{"formatter":{"id":"b790c268-d4e4-4f08-9bde-c984380aa713","type":"BasicTickFormatter"},"plot":{"id":"fb044f93-0d35-4f98-ae50-cd611d17c76e","type":"Plot"},"ticker":{"id":"ffbc42d2-0cb7-442b-9e21-d1e87ebde89b","type":"BasicTicker"}},"id":"f2df3c60-7fa2-4b3e-b425-4cb1566f671d","type":"LinearAxis"},{"attributes":{},"id":"ffbc42d2-0cb7-442b-9e21-d1e87ebde89b","type":"BasicTicker"},{"attributes":{},"id":"cf80b3bf-9038-46b1-a073-981a9d65a180","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#dd1c77"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"16012d5f-03ee-4b34-afbb-cca5c2c1fc72","type":"CircleX"},{"attributes":{"formatter":{"id":"cf80b3bf-9038-46b1-a073-981a9d65a180","type":"BasicTickFormatter"},"plot":{"id":"fb044f93-0d35-4f98-ae50-cd611d17c76e","type":"Plot"},"ticker":{"id":"f0cf99bf-3cdb-4334-8cfe-31fd031bdb06","type":"BasicTicker"}},"id":"4d17cec2-c20c-4c32-a8f4-ddf9cabb8463","type":"LinearAxis"},{"attributes":{"plot":{"id":"fb044f93-0d35-4f98-ae50-cd611d17c76e","type":"Plot"},"ticker":{"id":"f0cf99bf-3cdb-4334-8cfe-31fd031bdb06","type":"BasicTicker"}},"id":"b630548a-f0e1-450b-9536-d75b1dcc220a","type":"Grid"}],"root_ids":["fb044f93-0d35-4f98-ae50-cd611d17c76e"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"6592df69-c275-4854-a220-773c89c59294","elementid":"111cb2bd-e65f-4658-9794-25e33864318e","modelid":"fb044f93-0d35-4f98-ae50-cd611d17c76e"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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