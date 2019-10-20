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
      };var element = document.getElementById("85e6ba49-d353-4756-815c-23a90cf49319");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '85e6ba49-d353-4756-815c-23a90cf49319' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"db3c76b3-301c-4c94-8cb2-06d4bb563b61":{"roots":{"references":[{"attributes":{},"id":"e81fadb7-4bb2-4311-b9df-f4756885cda2","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"4956a0e8-0c76-4536-b03b-fe412e7c1c30","subtype":"Figure","type":"Plot"}},"id":"914358f1-3cde-48e9-9511-0f09964d1491","type":"SaveTool"},{"attributes":{"plot":null,"text":null},"id":"bbad7761-60fe-4533-8bbf-8e6db46a4868","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a654c325-d0d1-429a-9c7f-11484be8551b","type":"PanTool"},{"id":"bd023a4e-83d6-45cf-b1b2-10745d93d21e","type":"WheelZoomTool"},{"id":"4dd8bf1d-34e6-463b-94d4-6766e6d162b4","type":"BoxZoomTool"},{"id":"914358f1-3cde-48e9-9511-0f09964d1491","type":"SaveTool"},{"id":"8757fa7d-1b85-481e-aac4-585644c33dc6","type":"ResetTool"},{"id":"62562d4a-c194-4def-9dce-10ab077bb3e8","type":"HelpTool"}]},"id":"606669fa-4779-40c1-92da-f664bb6df8ad","type":"Toolbar"},{"attributes":{"formatter":{"id":"e81fadb7-4bb2-4311-b9df-f4756885cda2","type":"BasicTickFormatter"},"plot":{"id":"4956a0e8-0c76-4536-b03b-fe412e7c1c30","subtype":"Figure","type":"Plot"},"ticker":{"id":"1670c3d0-7f28-439c-8faf-9ee7ce4ab431","type":"BasicTicker"}},"id":"9be16f2d-19c9-48c3-8e0f-d3f9719889c8","type":"LinearAxis"},{"attributes":{},"id":"92e5ded2-7430-48fd-b24d-736827f3855a","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b2635dd3-e254-43b0-b2e6-76bfd495fb1b","type":"ColumnDataSource"},"glyph":{"id":"5048db5e-e839-4cc6-b011-29a6cf63b537","type":"Diamond"},"hover_glyph":null,"nonselection_glyph":{"id":"06178aca-3962-49b7-9112-713f4411b1b1","type":"Diamond"},"selection_glyph":null},"id":"2e9a33bc-179f-4b05-9d0a-26e6f627f85a","type":"GlyphRenderer"},{"attributes":{},"id":"1670c3d0-7f28-439c-8faf-9ee7ce4ab431","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"81cec734-91d9-4b13-9840-3fc991b84d4d","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"81cec734-91d9-4b13-9840-3fc991b84d4d","type":"BoxAnnotation"},"plot":{"id":"4956a0e8-0c76-4536-b03b-fe412e7c1c30","subtype":"Figure","type":"Plot"}},"id":"4dd8bf1d-34e6-463b-94d4-6766e6d162b4","type":"BoxZoomTool"},{"attributes":{},"id":"251144f7-3db5-4735-86ed-59f8cc373294","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"06178aca-3962-49b7-9112-713f4411b1b1","type":"Diamond"},{"attributes":{"plot":{"id":"4956a0e8-0c76-4536-b03b-fe412e7c1c30","subtype":"Figure","type":"Plot"}},"id":"a654c325-d0d1-429a-9c7f-11484be8551b","type":"PanTool"},{"attributes":{"plot":{"id":"4956a0e8-0c76-4536-b03b-fe412e7c1c30","subtype":"Figure","type":"Plot"}},"id":"bd023a4e-83d6-45cf-b1b2-10745d93d21e","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"4956a0e8-0c76-4536-b03b-fe412e7c1c30","subtype":"Figure","type":"Plot"},"ticker":{"id":"92e5ded2-7430-48fd-b24d-736827f3855a","type":"BasicTicker"}},"id":"f7b586d1-7d89-4cb2-a5dd-94a8353e89be","type":"Grid"},{"attributes":{"below":[{"id":"9be16f2d-19c9-48c3-8e0f-d3f9719889c8","type":"LinearAxis"}],"left":[{"id":"31362fd6-1e97-40be-bd83-d780fae39d97","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9be16f2d-19c9-48c3-8e0f-d3f9719889c8","type":"LinearAxis"},{"id":"eeaf4e5b-718d-452a-83a9-24176f45df3b","type":"Grid"},{"id":"31362fd6-1e97-40be-bd83-d780fae39d97","type":"LinearAxis"},{"id":"f7b586d1-7d89-4cb2-a5dd-94a8353e89be","type":"Grid"},{"id":"81cec734-91d9-4b13-9840-3fc991b84d4d","type":"BoxAnnotation"},{"id":"2e9a33bc-179f-4b05-9d0a-26e6f627f85a","type":"GlyphRenderer"}],"title":{"id":"bbad7761-60fe-4533-8bbf-8e6db46a4868","type":"Title"},"tool_events":{"id":"d1d2b4cd-238a-4bd0-8994-01225300d712","type":"ToolEvents"},"toolbar":{"id":"606669fa-4779-40c1-92da-f664bb6df8ad","type":"Toolbar"},"x_range":{"id":"f7050bd2-cd9a-438f-9d80-15af4a593de9","type":"DataRange1d"},"y_range":{"id":"f027a1b4-4731-4b07-8a7f-47dba1e009d0","type":"DataRange1d"}},"id":"4956a0e8-0c76-4536-b03b-fe412e7c1c30","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"251144f7-3db5-4735-86ed-59f8cc373294","type":"BasicTickFormatter"},"plot":{"id":"4956a0e8-0c76-4536-b03b-fe412e7c1c30","subtype":"Figure","type":"Plot"},"ticker":{"id":"92e5ded2-7430-48fd-b24d-736827f3855a","type":"BasicTicker"}},"id":"31362fd6-1e97-40be-bd83-d780fae39d97","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"b2635dd3-e254-43b0-b2e6-76bfd495fb1b","type":"ColumnDataSource"},{"attributes":{},"id":"d1d2b4cd-238a-4bd0-8994-01225300d712","type":"ToolEvents"},{"attributes":{"fill_color":{"value":"#1C9099"},"line_color":{"value":"#1C9099"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"5048db5e-e839-4cc6-b011-29a6cf63b537","type":"Diamond"},{"attributes":{"plot":{"id":"4956a0e8-0c76-4536-b03b-fe412e7c1c30","subtype":"Figure","type":"Plot"},"ticker":{"id":"1670c3d0-7f28-439c-8faf-9ee7ce4ab431","type":"BasicTicker"}},"id":"eeaf4e5b-718d-452a-83a9-24176f45df3b","type":"Grid"},{"attributes":{"callback":null},"id":"f027a1b4-4731-4b07-8a7f-47dba1e009d0","type":"DataRange1d"},{"attributes":{"callback":null},"id":"f7050bd2-cd9a-438f-9d80-15af4a593de9","type":"DataRange1d"},{"attributes":{"plot":{"id":"4956a0e8-0c76-4536-b03b-fe412e7c1c30","subtype":"Figure","type":"Plot"}},"id":"62562d4a-c194-4def-9dce-10ab077bb3e8","type":"HelpTool"},{"attributes":{"plot":{"id":"4956a0e8-0c76-4536-b03b-fe412e7c1c30","subtype":"Figure","type":"Plot"}},"id":"8757fa7d-1b85-481e-aac4-585644c33dc6","type":"ResetTool"}],"root_ids":["4956a0e8-0c76-4536-b03b-fe412e7c1c30"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"db3c76b3-301c-4c94-8cb2-06d4bb563b61","elementid":"85e6ba49-d353-4756-815c-23a90cf49319","modelid":"4956a0e8-0c76-4536-b03b-fe412e7c1c30"}];
              
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