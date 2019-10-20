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
      };var element = document.getElementById("ca99441f-b56c-4af1-bbea-2b27f0b7323c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ca99441f-b56c-4af1-bbea-2b27f0b7323c' but no matching script tag was found. ")
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
                  var docs_json = {"f877fd23-5d1d-4d29-9684-95bcbc51c6ee":{"roots":{"references":[{"attributes":{"callback":null},"id":"a6bf93b0-94cf-451a-b013-52bbdb3822d1","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"5e385dde-ce85-4e33-8358-c028cec63565","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"96d591be-0b59-402a-b727-545655d90a30","subtype":"Figure","type":"Plot"},"ticker":{"id":"a074b47b-9bd8-4c01-8838-4fa9920587a7","type":"BasicTicker"}},"id":"5f84a7e5-1b4b-4972-9af3-7aecc5814230","type":"Grid"},{"attributes":{"callback":null},"id":"a9bbd3bd-b39d-4420-9788-189199996283","type":"DataRange1d"},{"attributes":{"plot":{"id":"96d591be-0b59-402a-b727-545655d90a30","subtype":"Figure","type":"Plot"}},"id":"30f54c76-4f1d-4300-990d-4b231465c73e","type":"ResetTool"},{"attributes":{},"id":"50efe2e6-d6eb-4cbe-9114-6e69c14afb84","type":"BasicTicker"},{"attributes":{"overlay":{"id":"c40294c8-366e-44c9-81fb-ef0e6b7ae249","type":"BoxAnnotation"},"plot":{"id":"96d591be-0b59-402a-b727-545655d90a30","subtype":"Figure","type":"Plot"}},"id":"101743d4-017e-4651-940c-2404946fcc7c","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":null},"id":"4cae5cc2-1c0f-4fd2-b956-45d5c6ba344d","type":"Title"},{"attributes":{"plot":{"id":"96d591be-0b59-402a-b727-545655d90a30","subtype":"Figure","type":"Plot"},"ticker":{"id":"50efe2e6-d6eb-4cbe-9114-6e69c14afb84","type":"BasicTicker"}},"id":"acd0343e-d32c-40b2-8679-c2a93d1a2c54","type":"Grid"},{"attributes":{"plot":{"id":"96d591be-0b59-402a-b727-545655d90a30","subtype":"Figure","type":"Plot"}},"id":"7b542289-ac6d-46e1-84a8-74138917836f","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"5e385dde-ce85-4e33-8358-c028cec63565","type":"ColumnDataSource"},"glyph":{"id":"a710d571-cdb3-48d3-990b-85bccc3b0144","type":"SquareX"},"hover_glyph":null,"nonselection_glyph":{"id":"237b387e-2b35-41ac-b805-34e895663675","type":"SquareX"},"selection_glyph":null},"id":"188152c7-8317-4c09-a8eb-9736ca3f635d","type":"GlyphRenderer"},{"attributes":{},"id":"a074b47b-9bd8-4c01-8838-4fa9920587a7","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"31f3b63e-ab07-412e-a241-ef3a798d36b0","type":"PanTool"},{"id":"7b542289-ac6d-46e1-84a8-74138917836f","type":"WheelZoomTool"},{"id":"101743d4-017e-4651-940c-2404946fcc7c","type":"BoxZoomTool"},{"id":"3a499437-3dc2-4027-8ca4-85f409c72424","type":"SaveTool"},{"id":"30f54c76-4f1d-4300-990d-4b231465c73e","type":"ResetTool"},{"id":"1c96635f-83e7-4ebf-9c93-562a121b65ce","type":"HelpTool"}]},"id":"b7f1fd2a-8c88-4542-a1bc-5c38f270bcc0","type":"Toolbar"},{"attributes":{"plot":{"id":"96d591be-0b59-402a-b727-545655d90a30","subtype":"Figure","type":"Plot"}},"id":"3a499437-3dc2-4027-8ca4-85f409c72424","type":"SaveTool"},{"attributes":{"plot":{"id":"96d591be-0b59-402a-b727-545655d90a30","subtype":"Figure","type":"Plot"}},"id":"1c96635f-83e7-4ebf-9c93-562a121b65ce","type":"HelpTool"},{"attributes":{"plot":{"id":"96d591be-0b59-402a-b727-545655d90a30","subtype":"Figure","type":"Plot"}},"id":"31f3b63e-ab07-412e-a241-ef3a798d36b0","type":"PanTool"},{"attributes":{},"id":"1126c89d-ba51-4054-ad12-8e051a86da0f","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"237b387e-2b35-41ac-b805-34e895663675","type":"SquareX"},{"attributes":{"formatter":{"id":"26378491-2146-43b5-96bf-e9e3c207bce5","type":"BasicTickFormatter"},"plot":{"id":"96d591be-0b59-402a-b727-545655d90a30","subtype":"Figure","type":"Plot"},"ticker":{"id":"50efe2e6-d6eb-4cbe-9114-6e69c14afb84","type":"BasicTicker"}},"id":"d044eb3d-21ea-42d9-9aa9-652efa4ef02e","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c40294c8-366e-44c9-81fb-ef0e6b7ae249","type":"BoxAnnotation"},{"attributes":{},"id":"26378491-2146-43b5-96bf-e9e3c207bce5","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"d044eb3d-21ea-42d9-9aa9-652efa4ef02e","type":"LinearAxis"}],"left":[{"id":"9478cdf0-e1f2-4b4e-80b4-898c30611656","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d044eb3d-21ea-42d9-9aa9-652efa4ef02e","type":"LinearAxis"},{"id":"acd0343e-d32c-40b2-8679-c2a93d1a2c54","type":"Grid"},{"id":"9478cdf0-e1f2-4b4e-80b4-898c30611656","type":"LinearAxis"},{"id":"5f84a7e5-1b4b-4972-9af3-7aecc5814230","type":"Grid"},{"id":"c40294c8-366e-44c9-81fb-ef0e6b7ae249","type":"BoxAnnotation"},{"id":"188152c7-8317-4c09-a8eb-9736ca3f635d","type":"GlyphRenderer"}],"title":{"id":"4cae5cc2-1c0f-4fd2-b956-45d5c6ba344d","type":"Title"},"tool_events":{"id":"1126c89d-ba51-4054-ad12-8e051a86da0f","type":"ToolEvents"},"toolbar":{"id":"b7f1fd2a-8c88-4542-a1bc-5c38f270bcc0","type":"Toolbar"},"x_range":{"id":"a9bbd3bd-b39d-4420-9788-189199996283","type":"DataRange1d"},"y_range":{"id":"a6bf93b0-94cf-451a-b013-52bbdb3822d1","type":"DataRange1d"}},"id":"96d591be-0b59-402a-b727-545655d90a30","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"728fe3e0-1225-4798-924b-a3873b3ef690","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a710d571-cdb3-48d3-990b-85bccc3b0144","type":"SquareX"},{"attributes":{"formatter":{"id":"728fe3e0-1225-4798-924b-a3873b3ef690","type":"BasicTickFormatter"},"plot":{"id":"96d591be-0b59-402a-b727-545655d90a30","subtype":"Figure","type":"Plot"},"ticker":{"id":"a074b47b-9bd8-4c01-8838-4fa9920587a7","type":"BasicTicker"}},"id":"9478cdf0-e1f2-4b4e-80b4-898c30611656","type":"LinearAxis"}],"root_ids":["96d591be-0b59-402a-b727-545655d90a30"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"f877fd23-5d1d-4d29-9684-95bcbc51c6ee","elementid":"ca99441f-b56c-4af1-bbea-2b27f0b7323c","modelid":"96d591be-0b59-402a-b727-545655d90a30"}];
                  
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