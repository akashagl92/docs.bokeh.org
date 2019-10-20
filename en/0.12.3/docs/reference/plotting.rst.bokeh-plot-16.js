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
      };var element = document.getElementById("b504a1d8-2ba4-487b-bfd5-00ce44f6d93e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b504a1d8-2ba4-487b-bfd5-00ce44f6d93e' but no matching script tag was found. ")
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
                  var docs_json = {"01cac91d-3d24-4a92-b916-129bc693f93e":{"roots":{"references":[{"attributes":{},"id":"bb59cfe7-476c-4b90-81aa-2d6636955fa0","type":"BasicTicker"},{"attributes":{},"id":"c725ca4a-c812-4d8f-94a9-439f0c2c8c85","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"5095a951-995c-4345-8e18-930ac12f6be9","type":"DataRange1d"},{"attributes":{"formatter":{"id":"0f876d9d-937d-4918-98e4-54c6bd11ec1d","type":"BasicTickFormatter"},"plot":{"id":"6158dd9c-dafd-46a2-972e-beced7b485e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba15e077-a159-47e2-acec-2b42c5755c58","type":"BasicTicker"}},"id":"557cc627-5c01-4b9f-91b7-a8268c8c7fb5","type":"LinearAxis"},{"attributes":{"plot":{"id":"6158dd9c-dafd-46a2-972e-beced7b485e6","subtype":"Figure","type":"Plot"}},"id":"df61ca09-9b52-4256-9e78-6ae4be13ead3","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bdf7df96-97ef-43c2-9224-1336a790b2c8","type":"PanTool"},{"id":"15672297-ec31-4c5b-9faa-471208a05bb1","type":"WheelZoomTool"},{"id":"d5223ab3-57cc-4fa0-847a-06987680b77a","type":"BoxZoomTool"},{"id":"27d86755-cca8-4d99-86ae-1f841539646a","type":"SaveTool"},{"id":"d542e4b2-c4a2-4d6d-b950-9f74e858e799","type":"ResetTool"},{"id":"df61ca09-9b52-4256-9e78-6ae4be13ead3","type":"HelpTool"}]},"id":"04e0bf94-553d-4c9d-a2e7-18b35a9d0545","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["top","left","right","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"32a7b4af-34e6-410d-9aaa-0d243fbbbfc1","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":null},"id":"bcf1d2cf-ed21-4fe6-aced-9412f974de19","type":"Title"},{"attributes":{"overlay":{"id":"7571641e-1ddf-434f-a2a6-b3555824e0d9","type":"BoxAnnotation"},"plot":{"id":"6158dd9c-dafd-46a2-972e-beced7b485e6","subtype":"Figure","type":"Plot"}},"id":"d5223ab3-57cc-4fa0-847a-06987680b77a","type":"BoxZoomTool"},{"attributes":{},"id":"566f3404-f885-448f-9d09-721613aa1dbb","type":"ToolEvents"},{"attributes":{"data_source":{"id":"32a7b4af-34e6-410d-9aaa-0d243fbbbfc1","type":"ColumnDataSource"},"glyph":{"id":"c1fe4f4f-3b43-4913-a923-73dad59b6e2e","type":"Quad"},"hover_glyph":null,"nonselection_glyph":{"id":"f6ac5963-bd3e-40e7-9ae8-6701f58e6a33","type":"Quad"},"selection_glyph":null},"id":"71ad07fc-1843-49c3-9fd5-b36e2c14f182","type":"GlyphRenderer"},{"attributes":{},"id":"0f876d9d-937d-4918-98e4-54c6bd11ec1d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6158dd9c-dafd-46a2-972e-beced7b485e6","subtype":"Figure","type":"Plot"}},"id":"15672297-ec31-4c5b-9faa-471208a05bb1","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"6158dd9c-dafd-46a2-972e-beced7b485e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"ba15e077-a159-47e2-acec-2b42c5755c58","type":"BasicTicker"}},"id":"f5e7c1cd-06ed-4bd2-91bd-923cff86dbe9","type":"Grid"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"c1fe4f4f-3b43-4913-a923-73dad59b6e2e","type":"Quad"},{"attributes":{"callback":null},"id":"683511bd-4e23-45d3-ae34-4e171b24415d","type":"DataRange1d"},{"attributes":{"plot":{"id":"6158dd9c-dafd-46a2-972e-beced7b485e6","subtype":"Figure","type":"Plot"}},"id":"bdf7df96-97ef-43c2-9224-1336a790b2c8","type":"PanTool"},{"attributes":{"plot":{"id":"6158dd9c-dafd-46a2-972e-beced7b485e6","subtype":"Figure","type":"Plot"}},"id":"d542e4b2-c4a2-4d6d-b950-9f74e858e799","type":"ResetTool"},{"attributes":{"plot":{"id":"6158dd9c-dafd-46a2-972e-beced7b485e6","subtype":"Figure","type":"Plot"}},"id":"27d86755-cca8-4d99-86ae-1f841539646a","type":"SaveTool"},{"attributes":{"formatter":{"id":"c725ca4a-c812-4d8f-94a9-439f0c2c8c85","type":"BasicTickFormatter"},"plot":{"id":"6158dd9c-dafd-46a2-972e-beced7b485e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb59cfe7-476c-4b90-81aa-2d6636955fa0","type":"BasicTicker"}},"id":"38ad5202-19b9-4f8b-8875-37fd1cf428ba","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"6158dd9c-dafd-46a2-972e-beced7b485e6","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb59cfe7-476c-4b90-81aa-2d6636955fa0","type":"BasicTicker"}},"id":"41dd4aca-ff83-4e44-b971-d1cb9267ab80","type":"Grid"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"f6ac5963-bd3e-40e7-9ae8-6701f58e6a33","type":"Quad"},{"attributes":{"below":[{"id":"557cc627-5c01-4b9f-91b7-a8268c8c7fb5","type":"LinearAxis"}],"left":[{"id":"38ad5202-19b9-4f8b-8875-37fd1cf428ba","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"557cc627-5c01-4b9f-91b7-a8268c8c7fb5","type":"LinearAxis"},{"id":"f5e7c1cd-06ed-4bd2-91bd-923cff86dbe9","type":"Grid"},{"id":"38ad5202-19b9-4f8b-8875-37fd1cf428ba","type":"LinearAxis"},{"id":"41dd4aca-ff83-4e44-b971-d1cb9267ab80","type":"Grid"},{"id":"7571641e-1ddf-434f-a2a6-b3555824e0d9","type":"BoxAnnotation"},{"id":"71ad07fc-1843-49c3-9fd5-b36e2c14f182","type":"GlyphRenderer"}],"title":{"id":"bcf1d2cf-ed21-4fe6-aced-9412f974de19","type":"Title"},"tool_events":{"id":"566f3404-f885-448f-9d09-721613aa1dbb","type":"ToolEvents"},"toolbar":{"id":"04e0bf94-553d-4c9d-a2e7-18b35a9d0545","type":"Toolbar"},"x_range":{"id":"5095a951-995c-4345-8e18-930ac12f6be9","type":"DataRange1d"},"y_range":{"id":"683511bd-4e23-45d3-ae34-4e171b24415d","type":"DataRange1d"}},"id":"6158dd9c-dafd-46a2-972e-beced7b485e6","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"ba15e077-a159-47e2-acec-2b42c5755c58","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7571641e-1ddf-434f-a2a6-b3555824e0d9","type":"BoxAnnotation"}],"root_ids":["6158dd9c-dafd-46a2-972e-beced7b485e6"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"01cac91d-3d24-4a92-b916-129bc693f93e","elementid":"b504a1d8-2ba4-487b-bfd5-00ce44f6d93e","modelid":"6158dd9c-dafd-46a2-972e-beced7b485e6"}];
                  
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