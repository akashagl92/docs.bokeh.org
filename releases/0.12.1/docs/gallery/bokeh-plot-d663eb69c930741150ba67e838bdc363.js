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
      };var element = document.getElementById("9296e62b-9e0b-495c-b0fb-67e62fbe75f4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9296e62b-9e0b-495c-b0fb-67e62fbe75f4' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"3de6ae7f-dced-4070-845a-462fbf2a4918":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5ce1df3e-7f59-4989-9481-ca44735b9e62","type":"Toolbar"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"bd9175c9-a14c-4dc1-8f28-62ea8e0af174","type":"Segment"},{"attributes":{"formatter":{"id":"444b5fc9-2087-4160-9fe4-be79d9764b3f","type":"CategoricalTickFormatter"},"plot":{"id":"feb0457b-75be-416c-8c66-865196a1513d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0ccf27bb-784e-45cb-8d1a-7d048a42652e","type":"CategoricalTicker"}},"id":"22a9765d-72ea-45c4-affc-1bdfa651265f","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"e8e906b3-2dfa-4613-868c-918be1afe28a","type":"Circle"},{"attributes":{"below":[{"id":"07251542-2407-4386-aabf-5979a49b91ab","type":"LinearAxis"}],"left":[{"id":"64678bce-885d-481c-8a1a-2df72b2e206c","type":"CategoricalAxis"}],"renderers":[{"id":"07251542-2407-4386-aabf-5979a49b91ab","type":"LinearAxis"},{"id":"b7f9d8f5-4115-47e3-96e6-f27b2340759c","type":"Grid"},{"id":"64678bce-885d-481c-8a1a-2df72b2e206c","type":"CategoricalAxis"},{"id":"0514cdfb-8091-40bc-9775-bb4ef5dfcf5a","type":"Grid"},{"id":"8b2fe0f5-ebea-426c-8602-f7d797e00083","type":"GlyphRenderer"},{"id":"a88ba56f-8bac-444c-9df6-2a396cc45140","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"847d317d-3e38-4f96-8c91-28830a50ba67","type":"Title"},"tool_events":{"id":"f1a5b1ef-d2e6-4642-8298-f10bbef08ab8","type":"ToolEvents"},"toolbar":{"id":"5ce1df3e-7f59-4989-9481-ca44735b9e62","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fd680d5e-9f1c-4840-b36e-664205afdef4","type":"Range1d"},"y_range":{"id":"9aaf08ea-1acd-4ddf-86dc-7d11e8cecd5e","type":"FactorRange"}},"id":"40f9d3a7-0bdf-4dbb-9019-8952123c0abc","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"0e55bb31-8598-46b6-bfed-14ba935a6312","type":"CategoricalTickFormatter"},"plot":{"id":"40f9d3a7-0bdf-4dbb-9019-8952123c0abc","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ed4dfba-b07c-4908-bdff-861a65d91926","type":"CategoricalTicker"}},"id":"64678bce-885d-481c-8a1a-2df72b2e206c","type":"CategoricalAxis"},{"attributes":{"callback":null,"plot":{"id":"feb0457b-75be-416c-8c66-865196a1513d","subtype":"Figure","type":"Plot"}},"id":"bb268acc-95be-4826-b5e0-6d86f0027ba2","type":"HoverTool"},{"attributes":{},"id":"f1a5b1ef-d2e6-4642-8298-f10bbef08ab8","type":"ToolEvents"},{"attributes":{},"id":"444b5fc9-2087-4160-9fe4-be79d9764b3f","type":"CategoricalTickFormatter"},{"attributes":{},"id":"8ed4dfba-b07c-4908-bdff-861a65d91926","type":"CategoricalTicker"},{"attributes":{},"id":"1b753ea2-612c-41ea-91b3-8ac76c84ceed","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":100},"id":"fd680d5e-9f1c-4840-b36e-664205afdef4","type":"Range1d"},{"attributes":{"callback":null,"column_names":["x","y","line_color","fill_color"],"data":{"fill_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"line_color":["#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B","#79BD9A","#CFF09E","#79BD9A","#0B486B"],"x":["foo","foo","foo","bar","bar","bar","baz","baz","baz"],"y":["foo","bar","baz","foo","bar","baz","foo","bar","baz"]}},"id":"794d13be-6af6-4053-a72a-3c2a86d6d85a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"fdb4b72c-b7d3-4198-936f-8173a253f299","type":"ColumnDataSource"},"glyph":{"id":"bd9175c9-a14c-4dc1-8f28-62ea8e0af174","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"912f497a-2204-409f-bce5-4ee1cebd739b","type":"Segment"},"selection_glyph":null},"id":"8b2fe0f5-ebea-426c-8602-f7d797e00083","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1b753ea2-612c-41ea-91b3-8ac76c84ceed","type":"BasicTickFormatter"},"plot":{"id":"40f9d3a7-0bdf-4dbb-9019-8952123c0abc","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6d2897c-6bec-4810-825d-5fc49653332b","type":"BasicTicker"}},"id":"07251542-2407-4386-aabf-5979a49b91ab","type":"LinearAxis"},{"attributes":{},"id":"0ccf27bb-784e-45cb-8d1a-7d048a42652e","type":"CategoricalTicker"},{"attributes":{"below":[{"id":"22a9765d-72ea-45c4-affc-1bdfa651265f","type":"CategoricalAxis"}],"left":[{"id":"11725ede-0d46-47d2-9414-b9f817b1313e","type":"CategoricalAxis"}],"renderers":[{"id":"22a9765d-72ea-45c4-affc-1bdfa651265f","type":"CategoricalAxis"},{"id":"b32e5449-3dad-4d21-828b-9bb808955c4f","type":"Grid"},{"id":"11725ede-0d46-47d2-9414-b9f817b1313e","type":"CategoricalAxis"},{"id":"b071ade1-c3de-4e43-8a19-fe46b3c9883a","type":"Grid"},{"id":"464926a8-78b9-42e3-ac7a-3f9ecd484d20","type":"GlyphRenderer"}],"sizing_mode":"scale_width","title":{"id":"5783b284-4a28-446e-90fe-73ef8065005b","type":"Title"},"tool_events":{"id":"0a5c5c75-2b22-451e-a22c-89bb00d075f1","type":"ToolEvents"},"toolbar":{"id":"c21eb509-9981-4544-b864-871baa383aa6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d3e4afef-310f-45dc-bf72-ae6bb9d9885b","type":"FactorRange"},"y_range":{"id":"91dbf159-443d-4309-b355-6e755ec2bc99","type":"FactorRange"}},"id":"feb0457b-75be-416c-8c66-865196a1513d","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"7b25cd83-7852-4269-8dec-88fcd1e67b70","type":"ColumnDataSource"},"glyph":{"id":"4666a95a-ff10-455d-81e4-59fa6a1f9622","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"e8e906b3-2dfa-4613-868c-918be1afe28a","type":"Circle"},"selection_glyph":null},"id":"a88ba56f-8bac-444c-9df6-2a396cc45140","type":"GlyphRenderer"},{"attributes":{},"id":"0a5c5c75-2b22-451e-a22c-89bb00d075f1","type":"ToolEvents"},{"attributes":{"plot":{"id":"feb0457b-75be-416c-8c66-865196a1513d","subtype":"Figure","type":"Plot"},"ticker":{"id":"0ccf27bb-784e-45cb-8d1a-7d048a42652e","type":"CategoricalTicker"}},"id":"b32e5449-3dad-4d21-828b-9bb808955c4f","type":"Grid"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"9aaf08ea-1acd-4ddf-86dc-7d11e8cecd5e","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"7b25cd83-7852-4269-8dec-88fcd1e67b70","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"d3e4afef-310f-45dc-bf72-ae6bb9d9885b","type":"FactorRange"},{"attributes":{"fill_color":{"field":"fill_color"},"height":{"units":"data","value":1},"line_color":{"field":"line_color"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"45f165c7-5a1b-4771-9543-434a5165da56","type":"Rect"},{"attributes":{},"id":"1dcc1a64-6615-4006-8b21-ab9cf53cbb85","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y1","y0","x1"],"data":{"x1":[50,40,65,10,25,37,80,60],"y0":["a","b","c","d","e","f","g","h"],"y1":["a","b","c","d","e","f","g","h"]}},"id":"fdb4b72c-b7d3-4198-936f-8173a253f299","type":"ColumnDataSource"},{"attributes":{},"id":"0e55bb31-8598-46b6-bfed-14ba935a6312","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"40f9d3a7-0bdf-4dbb-9019-8952123c0abc","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6d2897c-6bec-4810-825d-5fc49653332b","type":"BasicTicker"}},"id":"b7f9d8f5-4115-47e3-96e6-f27b2340759c","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bb268acc-95be-4826-b5e0-6d86f0027ba2","type":"HoverTool"}]},"id":"c21eb509-9981-4544-b864-871baa383aa6","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"40f9d3a7-0bdf-4dbb-9019-8952123c0abc","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ed4dfba-b07c-4908-bdff-861a65d91926","type":"CategoricalTicker"}},"id":"0514cdfb-8091-40bc-9775-bb4ef5dfcf5a","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"feb0457b-75be-416c-8c66-865196a1513d","subtype":"Figure","type":"Plot"},"ticker":{"id":"1dcc1a64-6615-4006-8b21-ab9cf53cbb85","type":"CategoricalTicker"}},"id":"b071ade1-c3de-4e43-8a19-fe46b3c9883a","type":"Grid"},{"attributes":{"formatter":{"id":"4b813bfe-1e53-4720-94a5-76cee24d55f4","type":"CategoricalTickFormatter"},"plot":{"id":"feb0457b-75be-416c-8c66-865196a1513d","subtype":"Figure","type":"Plot"},"ticker":{"id":"1dcc1a64-6615-4006-8b21-ab9cf53cbb85","type":"CategoricalTicker"}},"id":"11725ede-0d46-47d2-9414-b9f817b1313e","type":"CategoricalAxis"},{"attributes":{"plot":null,"text":"Categorical Dot Plot"},"id":"847d317d-3e38-4f96-8c91-28830a50ba67","type":"Title"},{"attributes":{},"id":"a6d2897c-6bec-4810-825d-5fc49653332b","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Categorical Heatmap"},"id":"5783b284-4a28-446e-90fe-73ef8065005b","type":"Title"},{"attributes":{"data_source":{"id":"794d13be-6af6-4053-a72a-3c2a86d6d85a","type":"ColumnDataSource"},"glyph":{"id":"45f165c7-5a1b-4771-9543-434a5165da56","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"8b2ac9a3-b823-4a17-b22b-e3c2a34a7e71","type":"Rect"},"selection_glyph":null},"id":"464926a8-78b9-42e3-ac7a-3f9ecd484d20","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":1},"x":{"field":"x"},"y":{"field":"y"}},"id":"8b2ac9a3-b823-4a17-b22b-e3c2a34a7e71","type":"Rect"},{"attributes":{"callback":null,"factors":["foo","bar","baz"]},"id":"91dbf159-443d-4309-b355-6e755ec2bc99","type":"FactorRange"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"4666a95a-ff10-455d-81e4-59fa6a1f9622","type":"Circle"},{"attributes":{"children":[{"id":"feb0457b-75be-416c-8c66-865196a1513d","subtype":"Figure","type":"Plot"},{"id":"40f9d3a7-0bdf-4dbb-9019-8952123c0abc","subtype":"Figure","type":"Plot"}],"sizing_mode":"scale_width"},"id":"63332952-02c8-47cb-b072-637d25c188c2","type":"Row"},{"attributes":{},"id":"4b813bfe-1e53-4720-94a5-76cee24d55f4","type":"CategoricalTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"value":0},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"912f497a-2204-409f-bce5-4ee1cebd739b","type":"Segment"}],"root_ids":["63332952-02c8-47cb-b072-637d25c188c2"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"3de6ae7f-dced-4070-845a-462fbf2a4918","elementid":"9296e62b-9e0b-495c-b0fb-67e62fbe75f4","modelid":"63332952-02c8-47cb-b072-637d25c188c2"}];
              
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