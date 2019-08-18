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
      };var element = document.getElementById("b93d2b3f-2673-44df-8ab6-bf60749b588d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b93d2b3f-2673-44df-8ab6-bf60749b588d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"aba9298b-20ca-40d2-a7ec-0a70e4047459":{"roots":{"references":[{"attributes":{"formatter":{"id":"e29f00b0-9c28-4eaf-af8c-f15e5e24da95","type":"BasicTickFormatter"},"plot":{"id":"dbc7557b-ccb8-49f1-b1ad-aecf74ce57ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e5024e1-61d9-4b18-a80e-bfbafc7f5aae","type":"BasicTicker"}},"id":"f19baf29-1442-4f6e-abf5-c6c4fedc6511","type":"LinearAxis"},{"attributes":{"plot":{"id":"dbc7557b-ccb8-49f1-b1ad-aecf74ce57ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e5024e1-61d9-4b18-a80e-bfbafc7f5aae","type":"BasicTicker"}},"id":"fe5f9df9-4b4e-4958-9de5-d5a4b6494503","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ebcbdd80-fdd0-448e-85a9-4d9961af6ec9","type":"PanTool"},{"id":"f3a9a3e3-6410-40eb-b4ab-523d96cac1f9","type":"WheelZoomTool"},{"id":"4424b843-e929-45e6-932d-4eba875166f4","type":"BoxZoomTool"},{"id":"e58635ca-f8f7-4a49-8a55-0949d195bafd","type":"SaveTool"},{"id":"35624c95-fb61-416d-9bf8-84459dee1e2c","type":"ResetTool"},{"id":"7f2933d6-93d7-490d-bef6-a75a927a5ef9","type":"HelpTool"}]},"id":"48912b28-c003-4faf-8502-8ea4f6311fa4","type":"Toolbar"},{"attributes":{"below":[{"id":"f19baf29-1442-4f6e-abf5-c6c4fedc6511","type":"LinearAxis"}],"left":[{"id":"67ea8d3a-185c-4409-8fc3-0be7acf57974","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"f19baf29-1442-4f6e-abf5-c6c4fedc6511","type":"LinearAxis"},{"id":"fe5f9df9-4b4e-4958-9de5-d5a4b6494503","type":"Grid"},{"id":"67ea8d3a-185c-4409-8fc3-0be7acf57974","type":"LinearAxis"},{"id":"d7dc432d-f796-4087-9506-01b98e1c0cac","type":"Grid"},{"id":"219c8d4d-d1fa-4fa3-8475-d1beb32413a7","type":"BoxAnnotation"},{"id":"caef4178-7e63-4890-bd91-744d1400435f","type":"GlyphRenderer"}],"title":{"id":"13655d55-c92a-4844-9b3e-7881bb5b822b","type":"Title"},"tool_events":{"id":"63b66b9c-1370-4c6c-be3e-763fd283ce57","type":"ToolEvents"},"toolbar":{"id":"48912b28-c003-4faf-8502-8ea4f6311fa4","type":"Toolbar"},"x_range":{"id":"1e126007-4436-4b81-ba66-af19b84b3d13","type":"DataRange1d"},"y_range":{"id":"c84ccdc7-5cf9-469f-9dcf-4e1314cafee9","type":"DataRange1d"}},"id":"dbc7557b-ccb8-49f1-b1ad-aecf74ce57ee","subtype":"Figure","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"755b26e7-f760-471b-82e2-1f5e938f5cb1","type":"Ray"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"219c8d4d-d1fa-4fa3-8475-d1beb32413a7","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"dbc7557b-ccb8-49f1-b1ad-aecf74ce57ee","subtype":"Figure","type":"Plot"}},"id":"7f2933d6-93d7-490d-bef6-a75a927a5ef9","type":"HelpTool"},{"attributes":{"overlay":{"id":"219c8d4d-d1fa-4fa3-8475-d1beb32413a7","type":"BoxAnnotation"},"plot":{"id":"dbc7557b-ccb8-49f1-b1ad-aecf74ce57ee","subtype":"Figure","type":"Plot"}},"id":"4424b843-e929-45e6-932d-4eba875166f4","type":"BoxZoomTool"},{"attributes":{},"id":"14cfa384-d89f-4e14-92c6-2f299aa233ea","type":"BasicTicker"},{"attributes":{},"id":"4e5024e1-61d9-4b18-a80e-bfbafc7f5aae","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"2ce83e63-15e2-487d-94f3-655b331da7d7","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"dbc7557b-ccb8-49f1-b1ad-aecf74ce57ee","subtype":"Figure","type":"Plot"}},"id":"35624c95-fb61-416d-9bf8-84459dee1e2c","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"13655d55-c92a-4844-9b3e-7881bb5b822b","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"dbc7557b-ccb8-49f1-b1ad-aecf74ce57ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"14cfa384-d89f-4e14-92c6-2f299aa233ea","type":"BasicTicker"}},"id":"d7dc432d-f796-4087-9506-01b98e1c0cac","type":"Grid"},{"attributes":{"plot":{"id":"dbc7557b-ccb8-49f1-b1ad-aecf74ce57ee","subtype":"Figure","type":"Plot"}},"id":"e58635ca-f8f7-4a49-8a55-0949d195bafd","type":"SaveTool"},{"attributes":{"plot":{"id":"dbc7557b-ccb8-49f1-b1ad-aecf74ce57ee","subtype":"Figure","type":"Plot"}},"id":"f3a9a3e3-6410-40eb-b4ab-523d96cac1f9","type":"WheelZoomTool"},{"attributes":{},"id":"63b66b9c-1370-4c6c-be3e-763fd283ce57","type":"ToolEvents"},{"attributes":{},"id":"fd54cfcd-4fc0-4430-8abe-2b40e9bd9586","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2ce83e63-15e2-487d-94f3-655b331da7d7","type":"ColumnDataSource"},"glyph":{"id":"755b26e7-f760-471b-82e2-1f5e938f5cb1","type":"Ray"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c8e98681-c63d-48f0-8efb-68e3f117f3ff","type":"Ray"},"selection_glyph":null},"id":"caef4178-7e63-4890-bd91-744d1400435f","type":"GlyphRenderer"},{"attributes":{},"id":"e29f00b0-9c28-4eaf-af8c-f15e5e24da95","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"c84ccdc7-5cf9-469f-9dcf-4e1314cafee9","type":"DataRange1d"},{"attributes":{"formatter":{"id":"fd54cfcd-4fc0-4430-8abe-2b40e9bd9586","type":"BasicTickFormatter"},"plot":{"id":"dbc7557b-ccb8-49f1-b1ad-aecf74ce57ee","subtype":"Figure","type":"Plot"},"ticker":{"id":"14cfa384-d89f-4e14-92c6-2f299aa233ea","type":"BasicTicker"}},"id":"67ea8d3a-185c-4409-8fc3-0be7acf57974","type":"LinearAxis"},{"attributes":{"plot":{"id":"dbc7557b-ccb8-49f1-b1ad-aecf74ce57ee","subtype":"Figure","type":"Plot"}},"id":"ebcbdd80-fdd0-448e-85a9-4d9961af6ec9","type":"PanTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"length":{"units":"data","value":45},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c8e98681-c63d-48f0-8efb-68e3f117f3ff","type":"Ray"},{"attributes":{"callback":null},"id":"1e126007-4436-4b81-ba66-af19b84b3d13","type":"DataRange1d"}],"root_ids":["dbc7557b-ccb8-49f1-b1ad-aecf74ce57ee"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"aba9298b-20ca-40d2-a7ec-0a70e4047459","elementid":"b93d2b3f-2673-44df-8ab6-bf60749b588d","modelid":"dbc7557b-ccb8-49f1-b1ad-aecf74ce57ee"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
