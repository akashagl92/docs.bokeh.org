(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("6a347318-4ad4-40bd-96a3-04534bce4c01");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6a347318-4ad4-40bd-96a3-04534bce4c01' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"d406bbcd-9583-45ac-9ec6-89394aa9dab5":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"d7751278-ce18-42dd-b5fe-46e5e5fee746","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7e2c21c-813b-4721-bf4c-1be0320897a7","type":"BasicTicker"}},"id":"13078877-f7e1-4b79-b14d-123a14fd024b","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c8f64103-0790-44d1-aae1-ede232889299","type":"PanTool"},{"id":"cf951622-94e6-401a-9a35-48e128fceebc","type":"WheelZoomTool"},{"id":"d2eed216-964a-4e06-a809-8c3057d41f1a","type":"BoxZoomTool"},{"id":"ae513cbc-b72f-4072-8019-bd8c8e87c1e2","type":"SaveTool"},{"id":"ff9b0e94-efe0-40b4-9978-e5d92992d542","type":"ResetTool"},{"id":"3cb46fcc-ae3d-42bb-89d2-5f0601972e4b","type":"HelpTool"}]},"id":"788b1f35-8889-4679-887b-93c7025adbee","type":"Toolbar"},{"attributes":{},"id":"3ef3e58c-24fa-417d-b174-63a045df395a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"4def3ad3-7cc2-4469-885c-4cb7b4f42f18","type":"BasicTickFormatter"},"plot":{"id":"6e6dac4a-399f-4e98-9b85-7147209277aa","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ef3e58c-24fa-417d-b174-63a045df395a","type":"BasicTicker"}},"id":"617971b2-16d2-4854-a729-dc5d4dbe86b8","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ea1aa9c0-f336-4a06-b8af-e4a900bbc846","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"05f22c8e-1819-43c0-a1b4-e946b6d3c2bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"48b4598b-9a27-4059-b2be-835a470e3a54","type":"BasicTicker"}},"id":"df458faf-da61-4b32-96d1-ccd296d7ecf1","type":"Grid"},{"attributes":{},"id":"c35bdab7-6d24-4b82-87bf-e03480690152","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"d4b1295f-1a1b-4465-b607-ebc46dfd583b","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"ea1aa9c0-f336-4a06-b8af-e4a900bbc846","type":"BoxAnnotation"}},"id":"c9deb6b7-1dc1-49a8-838a-84c59e2155bb","type":"BoxZoomTool"},{"attributes":{},"id":"ecc4701c-363f-4a41-9ac0-3bf54a0610fb","type":"ResetTool"},{"attributes":{"formatter":{"id":"14f20cc9-f5a3-4b6c-8f18-9e6427d7e352","type":"BasicTickFormatter"},"plot":{"id":"05f22c8e-1819-43c0-a1b4-e946b6d3c2bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a7b913d-04c7-4ebe-8394-9214aecfc6e4","type":"BasicTicker"}},"id":"0549c615-c025-4444-b0d6-cf6d3dbed0c0","type":"LinearAxis"},{"attributes":{},"id":"6c8a7016-1e75-4ef8-a306-e9fe593a9868","type":"SaveTool"},{"attributes":{},"id":"38052553-4249-4d12-9965-b4567f96e5aa","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"6e6dac4a-399f-4e98-9b85-7147209277aa","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ef3e58c-24fa-417d-b174-63a045df395a","type":"BasicTicker"}},"id":"8f98e992-9ce1-4f10-8730-c70efbfd4549","type":"Grid"},{"attributes":{"callback":null},"id":"9f89174d-13cb-4917-a47e-581596c3a7d5","type":"DataRange1d"},{"attributes":{},"id":"bc4cb15b-8ea3-44cd-bf9b-d8a89d039438","type":"ResetTool"},{"attributes":{"plot":{"id":"6e6dac4a-399f-4e98-9b85-7147209277aa","subtype":"Figure","type":"Plot"},"ticker":{"id":"dcdc752a-cfa6-442e-9d45-fd30290d9383","type":"BasicTicker"}},"id":"a0151144-3970-425b-b283-fafff14a4c6d","type":"Grid"},{"attributes":{"callback":null},"id":"58b98cdb-ee65-4481-b028-e35b402a0f0d","type":"DataRange1d"},{"attributes":{"formatter":{"id":"281e2084-2fb9-4841-ac28-0ae03fbc4cfa","type":"BasicTickFormatter"},"plot":{"id":"05f22c8e-1819-43c0-a1b4-e946b6d3c2bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"48b4598b-9a27-4059-b2be-835a470e3a54","type":"BasicTicker"}},"id":"e236d8c0-5a6e-45bf-9e0d-00cdf6a3adb2","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7996293-2e94-4d5c-8c94-2f3e01e6eaf0","type":"Triangle"},{"attributes":{},"id":"96b33a61-d252-4e81-9f57-7e9b19b9a94a","type":"HelpTool"},{"attributes":{"below":[{"id":"b0c0357f-1c00-4230-b52b-3ff3693b1c93","type":"LinearAxis"}],"left":[{"id":"617971b2-16d2-4854-a729-dc5d4dbe86b8","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"b0c0357f-1c00-4230-b52b-3ff3693b1c93","type":"LinearAxis"},{"id":"a0151144-3970-425b-b283-fafff14a4c6d","type":"Grid"},{"id":"617971b2-16d2-4854-a729-dc5d4dbe86b8","type":"LinearAxis"},{"id":"8f98e992-9ce1-4f10-8730-c70efbfd4549","type":"Grid"},{"id":"ea1aa9c0-f336-4a06-b8af-e4a900bbc846","type":"BoxAnnotation"},{"id":"1eb5d7bc-ef91-4004-b91a-9ca492c026f1","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"f63b0848-381d-409b-aa90-f2229665729e","type":"Toolbar"},"x_range":{"id":"58b98cdb-ee65-4481-b028-e35b402a0f0d","type":"DataRange1d"},"x_scale":{"id":"5e901b10-5524-4c1a-b04e-3a27db5ec0e3","type":"LinearScale"},"y_range":{"id":"1c5acb47-c3b3-4b3e-86c4-5388a46b00cc","type":"DataRange1d"},"y_scale":{"id":"9c4d9105-9df4-457b-9494-49ad3ee05e60","type":"LinearScale"}},"id":"6e6dac4a-399f-4e98-9b85-7147209277aa","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"e2994f2f-0c62-4743-8459-36c978c75374","type":"ColumnDataSource"},"glyph":{"id":"a7996293-2e94-4d5c-8c94-2f3e01e6eaf0","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"01421ada-c6ec-44fe-92dd-95eb4f0e3aed","type":"Triangle"},"selection_glyph":null,"view":{"id":"3862d94d-c5f4-4ffa-ad2e-eb85509d561e","type":"CDSView"}},"id":"1eb5d7bc-ef91-4004-b91a-9ca492c026f1","type":"GlyphRenderer"},{"attributes":{},"id":"1c286611-3808-4b2d-91a2-0340f11911b1","type":"BasicTickFormatter"},{"attributes":{},"id":"9c4d9105-9df4-457b-9494-49ad3ee05e60","type":"LinearScale"},{"attributes":{},"id":"5e901b10-5524-4c1a-b04e-3a27db5ec0e3","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"e2994f2f-0c62-4743-8459-36c978c75374","type":"ColumnDataSource"},{"attributes":{"source":{"id":"e2994f2f-0c62-4743-8459-36c978c75374","type":"ColumnDataSource"}},"id":"3862d94d-c5f4-4ffa-ad2e-eb85509d561e","type":"CDSView"},{"attributes":{},"id":"b56e0383-6798-48da-afdd-4f6c50aceb62","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"38052553-4249-4d12-9965-b4567f96e5aa","type":"PanTool"},{"id":"c35bdab7-6d24-4b82-87bf-e03480690152","type":"WheelZoomTool"},{"id":"c9deb6b7-1dc1-49a8-838a-84c59e2155bb","type":"BoxZoomTool"},{"id":"6c8a7016-1e75-4ef8-a306-e9fe593a9868","type":"SaveTool"},{"id":"ecc4701c-363f-4a41-9ac0-3bf54a0610fb","type":"ResetTool"},{"id":"d0ef5e75-f035-46d4-9b6e-18d6e6912b69","type":"HelpTool"}]},"id":"f63b0848-381d-409b-aa90-f2229665729e","type":"Toolbar"},{"attributes":{},"id":"a41e97f9-2674-44ac-b857-149703db5808","type":"BasicTickFormatter"},{"attributes":{},"id":"3cb46fcc-ae3d-42bb-89d2-5f0601972e4b","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0ae1da25-1037-44fa-90f4-90bbf9b9f4ed","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"01421ada-c6ec-44fe-92dd-95eb4f0e3aed","type":"Triangle"},{"attributes":{},"id":"4def3ad3-7cc2-4469-885c-4cb7b4f42f18","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"1c5acb47-c3b3-4b3e-86c4-5388a46b00cc","type":"DataRange1d"},{"attributes":{"formatter":{"id":"3124e132-73fc-4e03-b227-bd8c4cb0cef2","type":"BasicTickFormatter"},"plot":{"id":"6e6dac4a-399f-4e98-9b85-7147209277aa","subtype":"Figure","type":"Plot"},"ticker":{"id":"dcdc752a-cfa6-442e-9d45-fd30290d9383","type":"BasicTicker"}},"id":"b0c0357f-1c00-4230-b52b-3ff3693b1c93","type":"LinearAxis"},{"attributes":{},"id":"dcdc752a-cfa6-442e-9d45-fd30290d9383","type":"BasicTicker"},{"attributes":{"formatter":{"id":"a41e97f9-2674-44ac-b857-149703db5808","type":"BasicTickFormatter"},"plot":{"id":"d7751278-ce18-42dd-b5fe-46e5e5fee746","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8755fd2-b0bb-49b6-8fb6-910068a93d39","type":"BasicTicker"}},"id":"b9219ade-08da-4cb5-98d4-a352c6bcda01","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"05176c1b-34cc-454c-adfe-d0e86f67a578","type":"Square"},{"attributes":{},"id":"1ad0f092-3777-42fa-9035-e018ac1dba6f","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5e99e69e-7375-44ad-82f5-1448db9dc073","type":"BoxAnnotation"},{"attributes":{},"id":"a7e2c21c-813b-4721-bf4c-1be0320897a7","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"b8638618-e757-4a0d-b7dd-52372391b22a","type":"ColumnDataSource"},{"attributes":{},"id":"1c118840-d5b4-4707-8673-c6ae724a5e90","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"eb6545c6-3828-4a04-9a21-5d4fbb984de4","type":"BoxAnnotation"}},"id":"c811e367-c3fe-4115-8463-cb3ef06c32db","type":"BoxZoomTool"},{"attributes":{},"id":"93475d2f-c03c-49d4-91d2-3acd611007c8","type":"PanTool"},{"attributes":{"source":{"id":"b8638618-e757-4a0d-b7dd-52372391b22a","type":"ColumnDataSource"}},"id":"1970c940-bc90-4179-8875-44a694adcbb0","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"eb6545c6-3828-4a04-9a21-5d4fbb984de4","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"f22e3501-5a78-4450-8a45-403fbdc94b16","type":"DataRange1d"},{"attributes":{},"id":"4291002b-c59b-406b-8288-f5ed11fa3959","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c9d1ae5-f901-4ee2-b94b-e260e5178ee2","type":"Circle"},{"attributes":{},"id":"281e2084-2fb9-4841-ac28-0ae03fbc4cfa","type":"BasicTickFormatter"},{"attributes":{},"id":"1a7b913d-04c7-4ebe-8394-9214aecfc6e4","type":"BasicTicker"},{"attributes":{},"id":"d8755fd2-b0bb-49b6-8fb6-910068a93d39","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4e7cdb29-c15c-4295-ab3d-7ccccd5d48de","type":"DataRange1d"},{"attributes":{"data_source":{"id":"b8638618-e757-4a0d-b7dd-52372391b22a","type":"ColumnDataSource"},"glyph":{"id":"5c9d1ae5-f901-4ee2-b94b-e260e5178ee2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0ae1da25-1037-44fa-90f4-90bbf9b9f4ed","type":"Circle"},"selection_glyph":null,"view":{"id":"1970c940-bc90-4179-8875-44a694adcbb0","type":"CDSView"}},"id":"40187a78-1db6-4471-bb96-817001135ce7","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"d7751278-ce18-42dd-b5fe-46e5e5fee746","subtype":"Figure","type":"Plot"},{"id":"6e6dac4a-399f-4e98-9b85-7147209277aa","subtype":"Figure","type":"Plot"},{"id":"05f22c8e-1819-43c0-a1b4-e946b6d3c2bb","subtype":"Figure","type":"Plot"}]},"id":"a4c2fbe5-e3fa-43d1-b540-516a3b5dc644","type":"Column"},{"attributes":{"callback":null},"id":"b958efcf-283f-4f61-8ce1-ac12469491f2","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1c286611-3808-4b2d-91a2-0340f11911b1","type":"BasicTickFormatter"},"plot":{"id":"d7751278-ce18-42dd-b5fe-46e5e5fee746","subtype":"Figure","type":"Plot"},"ticker":{"id":"a7e2c21c-813b-4721-bf4c-1be0320897a7","type":"BasicTicker"}},"id":"c9785390-5da7-443e-b74a-7e22eb582ccb","type":"LinearAxis"},{"attributes":{},"id":"ecfefdf7-7bde-4887-a300-f4e8e2fea365","type":"LinearScale"},{"attributes":{},"id":"48b4598b-9a27-4059-b2be-835a470e3a54","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"93475d2f-c03c-49d4-91d2-3acd611007c8","type":"PanTool"},{"id":"1c118840-d5b4-4707-8673-c6ae724a5e90","type":"WheelZoomTool"},{"id":"c811e367-c3fe-4115-8463-cb3ef06c32db","type":"BoxZoomTool"},{"id":"b56e0383-6798-48da-afdd-4f6c50aceb62","type":"SaveTool"},{"id":"bc4cb15b-8ea3-44cd-bf9b-d8a89d039438","type":"ResetTool"},{"id":"96b33a61-d252-4e81-9f57-7e9b19b9a94a","type":"HelpTool"}]},"id":"234f7fc2-917a-49ca-ab73-152d67655dfa","type":"Toolbar"},{"attributes":{"plot":{"id":"d7751278-ce18-42dd-b5fe-46e5e5fee746","subtype":"Figure","type":"Plot"},"ticker":{"id":"d8755fd2-b0bb-49b6-8fb6-910068a93d39","type":"BasicTicker"}},"id":"bc4f2f8f-bab7-4c08-b485-af76016d78d4","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2213c5c9-9929-4928-aad0-0595e7480590","type":"Square"},{"attributes":{"below":[{"id":"b9219ade-08da-4cb5-98d4-a352c6bcda01","type":"LinearAxis"}],"left":[{"id":"c9785390-5da7-443e-b74a-7e22eb582ccb","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"b9219ade-08da-4cb5-98d4-a352c6bcda01","type":"LinearAxis"},{"id":"bc4f2f8f-bab7-4c08-b485-af76016d78d4","type":"Grid"},{"id":"c9785390-5da7-443e-b74a-7e22eb582ccb","type":"LinearAxis"},{"id":"13078877-f7e1-4b79-b14d-123a14fd024b","type":"Grid"},{"id":"eb6545c6-3828-4a04-9a21-5d4fbb984de4","type":"BoxAnnotation"},{"id":"40187a78-1db6-4471-bb96-817001135ce7","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"234f7fc2-917a-49ca-ab73-152d67655dfa","type":"Toolbar"},"x_range":{"id":"b958efcf-283f-4f61-8ce1-ac12469491f2","type":"DataRange1d"},"x_scale":{"id":"ecfefdf7-7bde-4887-a300-f4e8e2fea365","type":"LinearScale"},"y_range":{"id":"f22e3501-5a78-4450-8a45-403fbdc94b16","type":"DataRange1d"},"y_scale":{"id":"1ad0f092-3777-42fa-9035-e018ac1dba6f","type":"LinearScale"}},"id":"d7751278-ce18-42dd-b5fe-46e5e5fee746","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2c34c17b-3838-4a48-8ad7-0d52226b9139","type":"LinearScale"},{"attributes":{},"id":"d0ef5e75-f035-46d4-9b6e-18d6e6912b69","type":"HelpTool"},{"attributes":{},"id":"ff9b0e94-efe0-40b4-9978-e5d92992d542","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"05f22c8e-1819-43c0-a1b4-e946b6d3c2bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"1a7b913d-04c7-4ebe-8394-9214aecfc6e4","type":"BasicTicker"}},"id":"086b73eb-1547-43c9-bbea-bedeae2473dc","type":"Grid"},{"attributes":{},"id":"3124e132-73fc-4e03-b227-bd8c4cb0cef2","type":"BasicTickFormatter"},{"attributes":{},"id":"cf951622-94e6-401a-9a35-48e128fceebc","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"5e99e69e-7375-44ad-82f5-1448db9dc073","type":"BoxAnnotation"}},"id":"d2eed216-964a-4e06-a809-8c3057d41f1a","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"e236d8c0-5a6e-45bf-9e0d-00cdf6a3adb2","type":"LinearAxis"}],"left":[{"id":"0549c615-c025-4444-b0d6-cf6d3dbed0c0","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"e236d8c0-5a6e-45bf-9e0d-00cdf6a3adb2","type":"LinearAxis"},{"id":"df458faf-da61-4b32-96d1-ccd296d7ecf1","type":"Grid"},{"id":"0549c615-c025-4444-b0d6-cf6d3dbed0c0","type":"LinearAxis"},{"id":"086b73eb-1547-43c9-bbea-bedeae2473dc","type":"Grid"},{"id":"5e99e69e-7375-44ad-82f5-1448db9dc073","type":"BoxAnnotation"},{"id":"e12427e8-92cc-4ec2-b6b3-c65709a2409c","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"788b1f35-8889-4679-887b-93c7025adbee","type":"Toolbar"},"x_range":{"id":"9f89174d-13cb-4917-a47e-581596c3a7d5","type":"DataRange1d"},"x_scale":{"id":"2c34c17b-3838-4a48-8ad7-0d52226b9139","type":"LinearScale"},"y_range":{"id":"4e7cdb29-c15c-4295-ab3d-7ccccd5d48de","type":"DataRange1d"},"y_scale":{"id":"4291002b-c59b-406b-8288-f5ed11fa3959","type":"LinearScale"}},"id":"05f22c8e-1819-43c0-a1b4-e946b6d3c2bb","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"d4b1295f-1a1b-4465-b607-ebc46dfd583b","type":"ColumnDataSource"},"glyph":{"id":"05176c1b-34cc-454c-adfe-d0e86f67a578","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2213c5c9-9929-4928-aad0-0595e7480590","type":"Square"},"selection_glyph":null,"view":{"id":"7cb5c301-35b9-4cd1-b03e-ca79982aed2d","type":"CDSView"}},"id":"e12427e8-92cc-4ec2-b6b3-c65709a2409c","type":"GlyphRenderer"},{"attributes":{},"id":"14f20cc9-f5a3-4b6c-8f18-9e6427d7e352","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"d4b1295f-1a1b-4465-b607-ebc46dfd583b","type":"ColumnDataSource"}},"id":"7cb5c301-35b9-4cd1-b03e-ca79982aed2d","type":"CDSView"},{"attributes":{},"id":"c8f64103-0790-44d1-aae1-ede232889299","type":"PanTool"},{"attributes":{},"id":"ae513cbc-b72f-4072-8019-bd8c8e87c1e2","type":"SaveTool"}],"root_ids":["a4c2fbe5-e3fa-43d1-b540-516a3b5dc644"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"d406bbcd-9583-45ac-9ec6-89394aa9dab5","elementid":"6a347318-4ad4-40bd-96a3-04534bce4c01","modelid":"a4c2fbe5-e3fa-43d1-b540-516a3b5dc644"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
