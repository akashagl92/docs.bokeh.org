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
      };var element = document.getElementById("6405c45b-d43e-4454-b105-c72a88d18c65");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6405c45b-d43e-4454-b105-c72a88d18c65' but no matching script tag was found. ")
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
                  var docs_json = {"fc1e7bcd-2720-4a63-8fd6-95c4a4c20aca":{"roots":{"references":[{"attributes":{"plot":{"id":"6dd14d48-4c30-497f-9fb3-a3f01be8756e","subtype":"Figure","type":"Plot"}},"id":"6f6cb3f6-3c97-44eb-872d-04c41d619165","type":"PanTool"},{"attributes":{},"id":"6ddf9012-51a6-4cb4-9d85-de7f687e2b88","type":"ToolEvents"},{"attributes":{"plot":null,"text":null},"id":"1baf3dc2-0a2f-42d7-bf78-c76b32d62a01","type":"Title"},{"attributes":{"plot":{"id":"6dd14d48-4c30-497f-9fb3-a3f01be8756e","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ef09dfe-83ab-4090-a126-20486cee569a","type":"BasicTicker"}},"id":"5300373e-dcca-4ee2-8e18-afcfeb9d7155","type":"Grid"},{"attributes":{"below":[{"id":"3d069480-ef82-4003-9a6c-7d1df6586142","type":"LinearAxis"}],"left":[{"id":"62110d50-50ec-4352-b789-4f05fbf0be1e","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"3d069480-ef82-4003-9a6c-7d1df6586142","type":"LinearAxis"},{"id":"5300373e-dcca-4ee2-8e18-afcfeb9d7155","type":"Grid"},{"id":"62110d50-50ec-4352-b789-4f05fbf0be1e","type":"LinearAxis"},{"id":"202db336-276f-45b0-bd18-9644ea320f04","type":"Grid"},{"id":"644e1338-dfa4-4ad0-97bc-e5b803252e7e","type":"BoxAnnotation"},{"id":"78da9a18-0a85-4c2a-a2ed-f144d3bc5e46","type":"GlyphRenderer"}],"title":{"id":"1baf3dc2-0a2f-42d7-bf78-c76b32d62a01","type":"Title"},"tool_events":{"id":"6ddf9012-51a6-4cb4-9d85-de7f687e2b88","type":"ToolEvents"},"toolbar":{"id":"c10df9c4-6e85-4177-a32e-9bdd202a8a43","type":"Toolbar"},"x_range":{"id":"4270d1bb-c7da-4aa6-be95-a7c50a1408e1","type":"DataRange1d"},"y_range":{"id":"92fb44ae-b959-4d60-9974-9ed9856e6a53","type":"DataRange1d"}},"id":"6dd14d48-4c30-497f-9fb3-a3f01be8756e","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6f6cb3f6-3c97-44eb-872d-04c41d619165","type":"PanTool"},{"id":"5092488f-abc8-445e-b9fc-64fdb347d412","type":"WheelZoomTool"},{"id":"48356d00-aedc-4842-90c9-ae1dcc0c1372","type":"BoxZoomTool"},{"id":"26552bf6-c2b6-4b81-9da5-c9aef10aad37","type":"SaveTool"},{"id":"a60597ed-f794-41b5-ae25-68693c26dcc8","type":"ResetTool"},{"id":"84f8188b-32a1-47a4-9133-3b8c9a4005a7","type":"HelpTool"}]},"id":"c10df9c4-6e85-4177-a32e-9bdd202a8a43","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"644e1338-dfa4-4ad0-97bc-e5b803252e7e","type":"BoxAnnotation"},{"attributes":{},"id":"eb71d13f-a170-4a9f-8286-3b83d403cb2b","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d2a1b7e1-c71a-4c4d-baf8-790eaa02b666","type":"ColumnDataSource"},"glyph":{"id":"2f6bb5d5-b469-451e-8c52-ace972cbe139","type":"VBar"},"hover_glyph":null,"nonselection_glyph":{"id":"62bbc3b1-b357-488e-b3fa-285d782a3e4d","type":"VBar"},"selection_glyph":null},"id":"78da9a18-0a85-4c2a-a2ed-f144d3bc5e46","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6dd14d48-4c30-497f-9fb3-a3f01be8756e","subtype":"Figure","type":"Plot"}},"id":"84f8188b-32a1-47a4-9133-3b8c9a4005a7","type":"HelpTool"},{"attributes":{"callback":null},"id":"92fb44ae-b959-4d60-9974-9ed9856e6a53","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[1,2,3],"x":[1,2,3]}},"id":"d2a1b7e1-c71a-4c4d-baf8-790eaa02b666","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6dd14d48-4c30-497f-9fb3-a3f01be8756e","subtype":"Figure","type":"Plot"}},"id":"5092488f-abc8-445e-b9fc-64fdb347d412","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"6dd14d48-4c30-497f-9fb3-a3f01be8756e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6eb01381-3a80-4c74-bfc2-6d2232b250e1","type":"BasicTicker"}},"id":"202db336-276f-45b0-bd18-9644ea320f04","type":"Grid"},{"attributes":{},"id":"8ef09dfe-83ab-4090-a126-20486cee569a","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"62bbc3b1-b357-488e-b3fa-285d782a3e4d","type":"VBar"},{"attributes":{"plot":{"id":"6dd14d48-4c30-497f-9fb3-a3f01be8756e","subtype":"Figure","type":"Plot"}},"id":"a60597ed-f794-41b5-ae25-68693c26dcc8","type":"ResetTool"},{"attributes":{"formatter":{"id":"eb71d13f-a170-4a9f-8286-3b83d403cb2b","type":"BasicTickFormatter"},"plot":{"id":"6dd14d48-4c30-497f-9fb3-a3f01be8756e","subtype":"Figure","type":"Plot"},"ticker":{"id":"6eb01381-3a80-4c74-bfc2-6d2232b250e1","type":"BasicTicker"}},"id":"62110d50-50ec-4352-b789-4f05fbf0be1e","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"line_color":{"value":"#CAB2D6"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"2f6bb5d5-b469-451e-8c52-ace972cbe139","type":"VBar"},{"attributes":{"plot":{"id":"6dd14d48-4c30-497f-9fb3-a3f01be8756e","subtype":"Figure","type":"Plot"}},"id":"26552bf6-c2b6-4b81-9da5-c9aef10aad37","type":"SaveTool"},{"attributes":{"callback":null},"id":"4270d1bb-c7da-4aa6-be95-a7c50a1408e1","type":"DataRange1d"},{"attributes":{},"id":"e8bd8c93-1c8b-4356-8d12-c6337aae0c60","type":"BasicTickFormatter"},{"attributes":{},"id":"6eb01381-3a80-4c74-bfc2-6d2232b250e1","type":"BasicTicker"},{"attributes":{"overlay":{"id":"644e1338-dfa4-4ad0-97bc-e5b803252e7e","type":"BoxAnnotation"},"plot":{"id":"6dd14d48-4c30-497f-9fb3-a3f01be8756e","subtype":"Figure","type":"Plot"}},"id":"48356d00-aedc-4842-90c9-ae1dcc0c1372","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"e8bd8c93-1c8b-4356-8d12-c6337aae0c60","type":"BasicTickFormatter"},"plot":{"id":"6dd14d48-4c30-497f-9fb3-a3f01be8756e","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ef09dfe-83ab-4090-a126-20486cee569a","type":"BasicTicker"}},"id":"3d069480-ef82-4003-9a6c-7d1df6586142","type":"LinearAxis"}],"root_ids":["6dd14d48-4c30-497f-9fb3-a3f01be8756e"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"fc1e7bcd-2720-4a63-8fd6-95c4a4c20aca","elementid":"6405c45b-d43e-4454-b105-c72a88d18c65","modelid":"6dd14d48-4c30-497f-9fb3-a3f01be8756e"}];
                  
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