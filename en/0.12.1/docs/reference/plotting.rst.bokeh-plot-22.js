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
      };var element = document.getElementById("f0b74b16-98eb-43d3-bf08-f36cb4407d8c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f0b74b16-98eb-43d3-bf08-f36cb4407d8c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"caf70717-da5b-4f53-a3a6-5177b26c0719":{"roots":{"references":[{"attributes":{},"id":"d3aa9c28-cc67-4853-ace6-d267f41aa953","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"3471d748-fa39-45f3-9448-115a4a9ac6bc","type":"Title"},{"attributes":{"below":[{"id":"b9003541-4c48-4217-b3c4-533caa2b6514","type":"LinearAxis"}],"left":[{"id":"04db7b0c-a6e4-4d85-9925-68ed727cd5ce","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b9003541-4c48-4217-b3c4-533caa2b6514","type":"LinearAxis"},{"id":"53f6a380-48d8-4a43-a02f-df7af527f9cc","type":"Grid"},{"id":"04db7b0c-a6e4-4d85-9925-68ed727cd5ce","type":"LinearAxis"},{"id":"13242591-81af-4d46-8671-13f7329626b0","type":"Grid"},{"id":"45501f0e-b9c4-49e5-8469-2eca05f5d1df","type":"BoxAnnotation"},{"id":"9342132f-d9d6-4be7-bb8c-98af7d190b69","type":"GlyphRenderer"}],"title":{"id":"3471d748-fa39-45f3-9448-115a4a9ac6bc","type":"Title"},"tool_events":{"id":"84b39da5-e38a-4a41-b703-079ab01c7a1b","type":"ToolEvents"},"toolbar":{"id":"35391d2c-6f4a-4569-8e32-463c97bc2904","type":"Toolbar"},"x_range":{"id":"f8f7856b-6aa8-46ae-a2d8-c5f1a63799c3","type":"DataRange1d"},"y_range":{"id":"f896ca92-1fd0-415f-b650-ad950d424a14","type":"DataRange1d"}},"id":"a0b55f80-39d3-4b99-9928-a3c3bb69674d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"71e24b0d-79a0-4c67-add7-dd0fbf71bda5","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"a0b55f80-39d3-4b99-9928-a3c3bb69674d","subtype":"Figure","type":"Plot"},"ticker":{"id":"71e24b0d-79a0-4c67-add7-dd0fbf71bda5","type":"BasicTicker"}},"id":"13242591-81af-4d46-8671-13f7329626b0","type":"Grid"},{"attributes":{"formatter":{"id":"d3aa9c28-cc67-4853-ace6-d267f41aa953","type":"BasicTickFormatter"},"plot":{"id":"a0b55f80-39d3-4b99-9928-a3c3bb69674d","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b1e9001-b62a-4cf6-97fe-83f0fe0ce8e0","type":"BasicTicker"}},"id":"b9003541-4c48-4217-b3c4-533caa2b6514","type":"LinearAxis"},{"attributes":{"plot":{"id":"a0b55f80-39d3-4b99-9928-a3c3bb69674d","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b1e9001-b62a-4cf6-97fe-83f0fe0ce8e0","type":"BasicTicker"}},"id":"53f6a380-48d8-4a43-a02f-df7af527f9cc","type":"Grid"},{"attributes":{"overlay":{"id":"45501f0e-b9c4-49e5-8469-2eca05f5d1df","type":"BoxAnnotation"},"plot":{"id":"a0b55f80-39d3-4b99-9928-a3c3bb69674d","subtype":"Figure","type":"Plot"}},"id":"1cb546a2-a252-4e17-8dba-ff7563fc957d","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"a0b55f80-39d3-4b99-9928-a3c3bb69674d","subtype":"Figure","type":"Plot"}},"id":"0b9d5f9a-7802-41a5-b1a7-31c80c157a26","type":"SaveTool"},{"attributes":{"plot":{"id":"a0b55f80-39d3-4b99-9928-a3c3bb69674d","subtype":"Figure","type":"Plot"}},"id":"9308279d-83b0-4232-ac27-91406fbaf968","type":"PanTool"},{"attributes":{"plot":{"id":"a0b55f80-39d3-4b99-9928-a3c3bb69674d","subtype":"Figure","type":"Plot"}},"id":"dbcb7470-3d05-4f3f-bd0b-8947f1191af4","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"45501f0e-b9c4-49e5-8469-2eca05f5d1df","type":"BoxAnnotation"},{"attributes":{},"id":"5b1e9001-b62a-4cf6-97fe-83f0fe0ce8e0","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9308279d-83b0-4232-ac27-91406fbaf968","type":"PanTool"},{"id":"142ea72f-33b1-4561-bf0e-7e1f0e6d7a12","type":"WheelZoomTool"},{"id":"1cb546a2-a252-4e17-8dba-ff7563fc957d","type":"BoxZoomTool"},{"id":"0b9d5f9a-7802-41a5-b1a7-31c80c157a26","type":"SaveTool"},{"id":"dbcb7470-3d05-4f3f-bd0b-8947f1191af4","type":"ResetTool"},{"id":"9a7e534b-58a4-4f41-81ec-b63d3d4f9540","type":"HelpTool"}]},"id":"35391d2c-6f4a-4569-8e32-463c97bc2904","type":"Toolbar"},{"attributes":{"callback":null},"id":"f896ca92-1fd0-415f-b650-ad950d424a14","type":"DataRange1d"},{"attributes":{"callback":null},"id":"f8f7856b-6aa8-46ae-a2d8-c5f1a63799c3","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"31e5ef13-46fb-48d0-b062-c69ad0fcdef6","type":"SquareX"},{"attributes":{"data_source":{"id":"c93cb8cf-c07d-4495-9aab-de2c3a2e81bb","type":"ColumnDataSource"},"glyph":{"id":"3f8c89d7-513c-41e3-bc19-3b6ae850ab13","type":"SquareX"},"hover_glyph":null,"nonselection_glyph":{"id":"31e5ef13-46fb-48d0-b062-c69ad0fcdef6","type":"SquareX"},"selection_glyph":null},"id":"9342132f-d9d6-4be7-bb8c-98af7d190b69","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f8c89d7-513c-41e3-bc19-3b6ae850ab13","type":"SquareX"},{"attributes":{"plot":{"id":"a0b55f80-39d3-4b99-9928-a3c3bb69674d","subtype":"Figure","type":"Plot"}},"id":"9a7e534b-58a4-4f41-81ec-b63d3d4f9540","type":"HelpTool"},{"attributes":{"formatter":{"id":"b94ef5e3-194a-4412-a37d-a3d37c60fb66","type":"BasicTickFormatter"},"plot":{"id":"a0b55f80-39d3-4b99-9928-a3c3bb69674d","subtype":"Figure","type":"Plot"},"ticker":{"id":"71e24b0d-79a0-4c67-add7-dd0fbf71bda5","type":"BasicTicker"}},"id":"04db7b0c-a6e4-4d85-9925-68ed727cd5ce","type":"LinearAxis"},{"attributes":{},"id":"b94ef5e3-194a-4412-a37d-a3d37c60fb66","type":"BasicTickFormatter"},{"attributes":{},"id":"84b39da5-e38a-4a41-b703-079ab01c7a1b","type":"ToolEvents"},{"attributes":{"plot":{"id":"a0b55f80-39d3-4b99-9928-a3c3bb69674d","subtype":"Figure","type":"Plot"}},"id":"142ea72f-33b1-4561-bf0e-7e1f0e6d7a12","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"c93cb8cf-c07d-4495-9aab-de2c3a2e81bb","type":"ColumnDataSource"}],"root_ids":["a0b55f80-39d3-4b99-9928-a3c3bb69674d"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"caf70717-da5b-4f53-a3a6-5177b26c0719","elementid":"f0b74b16-98eb-43d3-bf08-f36cb4407d8c","modelid":"a0b55f80-39d3-4b99-9928-a3c3bb69674d"}];
              
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