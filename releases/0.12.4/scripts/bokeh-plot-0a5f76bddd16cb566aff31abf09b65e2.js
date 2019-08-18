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
      };var element = document.getElementById("7e492b3d-f682-44ba-b345-153dbbba94b6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7e492b3d-f682-44ba-b345-153dbbba94b6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"03ffbaa9-4ba5-450d-84f6-d46914af2eb0":{"roots":{"references":[{"attributes":{"below":[{"id":"d9f81aad-8c7a-45fb-bcfa-aae280b3788a","type":"LinearAxis"}],"left":[{"id":"0af0b938-a9ea-4547-bed8-d7705d36ed91","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"d9f81aad-8c7a-45fb-bcfa-aae280b3788a","type":"LinearAxis"},{"id":"963e9f90-ba0b-45be-8ad7-17bd1dad85c0","type":"Grid"},{"id":"0af0b938-a9ea-4547-bed8-d7705d36ed91","type":"LinearAxis"},{"id":"80a496a6-a405-43da-8f3c-0035585fedcc","type":"Grid"},{"id":"e19b4a62-df14-4016-9b38-921c63cf3316","type":"BoxAnnotation"},{"id":"47f5b69c-1a49-4cbb-8af4-7799abe0ffc7","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"59115a0e-30c6-4749-81f9-c3015b6273c9","type":"ToolEvents"},"toolbar":{"id":"3a77c97c-6fdd-49cf-a268-766f62a478b5","type":"Toolbar"},"x_range":{"id":"3140e92c-7934-4a1c-8f10-9400fbdb9cde","type":"DataRange1d"},"y_range":{"id":"ce8c9af4-62f5-41ca-8836-a35adbdae283","type":"DataRange1d"}},"id":"a1118765-9b42-47f4-82d2-24ff9b9556dc","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"c20b8e42-c292-4769-a013-33a1776dc709","type":"BasicTickFormatter"},"plot":{"id":"0942858b-3743-4876-93db-7410a7ccc185","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ee26199-5f31-400b-a3a6-06a7e0b93e20","type":"BasicTicker"}},"id":"a054eeb5-c263-4dc0-9cf9-ee58f91f6f22","type":"LinearAxis"},{"attributes":{"plot":{"id":"b60f8717-d89a-4ab8-ab92-65f5baf0de0a","subtype":"Figure","type":"Plot"}},"id":"c137aeeb-2e3d-4aa5-95b1-4e3cb2d01b03","type":"ResetTool"},{"attributes":{},"id":"2eca2b76-d560-4f31-8cfa-6314d86d4d75","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c5466f49-bd74-48a7-a76c-012878f1a01b","type":"Square"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"04a80c03-6521-4a63-b5df-724c76141264","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"a1118765-9b42-47f4-82d2-24ff9b9556dc","subtype":"Figure","type":"Plot"}},"id":"fec7f3d4-d708-4c52-90d2-cd220a8bf519","type":"WheelZoomTool"},{"attributes":{},"id":"c87ec424-8702-45c5-ad00-546ddb825875","type":"BasicTicker"},{"attributes":{},"id":"ea8d66bd-fae1-426c-841f-5e1145463751","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"a1118765-9b42-47f4-82d2-24ff9b9556dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea8d66bd-fae1-426c-841f-5e1145463751","type":"BasicTicker"}},"id":"80a496a6-a405-43da-8f3c-0035585fedcc","type":"Grid"},{"attributes":{"formatter":{"id":"8f53fba6-6853-4e68-a907-cc06dfbb47a4","type":"BasicTickFormatter"},"plot":{"id":"b60f8717-d89a-4ab8-ab92-65f5baf0de0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"11d9865a-8bc9-4ce2-94a6-ceb5ecea2569","type":"BasicTicker"}},"id":"74842e90-d642-4c50-b299-45e317a07dba","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"0942858b-3743-4876-93db-7410a7ccc185","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ee26199-5f31-400b-a3a6-06a7e0b93e20","type":"BasicTicker"}},"id":"a5cb6ed6-6c9d-4764-b213-32849784200a","type":"Grid"},{"attributes":{},"id":"232eb6a0-48a1-4e7b-b50a-f4c20f8aafb8","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d291dae0-cae1-4776-aa46-181763f8d5ac","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c97a6aac-44e0-43ee-b67f-33391264c32b","type":"PanTool"},{"id":"85e38f9c-fa2a-4f72-8456-fcd21958baf1","type":"WheelZoomTool"},{"id":"30ec0adc-24b1-485f-8157-a03b9ed32d33","type":"BoxZoomTool"},{"id":"620c3cfc-0bee-407b-a33b-14664616103c","type":"SaveTool"},{"id":"c137aeeb-2e3d-4aa5-95b1-4e3cb2d01b03","type":"ResetTool"},{"id":"ec2b17ae-d535-4e8a-9fa3-0ea066259dc7","type":"HelpTool"}]},"id":"89f92a91-12a5-4814-83fb-590add434f65","type":"Toolbar"},{"attributes":{"formatter":{"id":"b4678f67-8972-443e-b177-bb6e1c6a9c70","type":"BasicTickFormatter"},"plot":{"id":"b60f8717-d89a-4ab8-ab92-65f5baf0de0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"232eb6a0-48a1-4e7b-b50a-f4c20f8aafb8","type":"BasicTicker"}},"id":"7e1158a3-a502-4293-a1ba-49cb7e1f93f8","type":"LinearAxis"},{"attributes":{},"id":"5af3993c-da41-4ccc-88de-bf4a52bd38bd","type":"ToolEvents"},{"attributes":{"callback":null},"id":"5fcc26bd-a644-4765-86fb-7b46888803fe","type":"DataRange1d"},{"attributes":{"plot":{"id":"b60f8717-d89a-4ab8-ab92-65f5baf0de0a","subtype":"Figure","type":"Plot"}},"id":"c97a6aac-44e0-43ee-b67f-33391264c32b","type":"PanTool"},{"attributes":{},"id":"59115a0e-30c6-4749-81f9-c3015b6273c9","type":"ToolEvents"},{"attributes":{"below":[{"id":"74842e90-d642-4c50-b299-45e317a07dba","type":"LinearAxis"}],"left":[{"id":"7e1158a3-a502-4293-a1ba-49cb7e1f93f8","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"74842e90-d642-4c50-b299-45e317a07dba","type":"LinearAxis"},{"id":"a2885086-2bfb-4ea9-a518-2592e5b93ec2","type":"Grid"},{"id":"7e1158a3-a502-4293-a1ba-49cb7e1f93f8","type":"LinearAxis"},{"id":"4ec284cb-109c-4e7c-b1da-cd03e8e50273","type":"Grid"},{"id":"d291dae0-cae1-4776-aa46-181763f8d5ac","type":"BoxAnnotation"},{"id":"93b33838-8f4a-467a-a9ff-9117f5b1f01a","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"709bda08-0fe8-4c54-94e1-a64e93b50b0a","type":"ToolEvents"},"toolbar":{"id":"89f92a91-12a5-4814-83fb-590add434f65","type":"Toolbar"},"x_range":{"id":"5fcc26bd-a644-4765-86fb-7b46888803fe","type":"DataRange1d"},"y_range":{"id":"f04a5452-5668-43b3-a297-7e3337d7b9aa","type":"DataRange1d"}},"id":"b60f8717-d89a-4ab8-ab92-65f5baf0de0a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"9f20dd56-2165-48e4-99f4-ac2a1a9b0297","type":"BasicTickFormatter"},{"attributes":{},"id":"3ee26199-5f31-400b-a3a6-06a7e0b93e20","type":"BasicTicker"},{"attributes":{"formatter":{"id":"dd6209f5-a85b-44fa-ab49-9c1bac297c6e","type":"BasicTickFormatter"},"plot":{"id":"a1118765-9b42-47f4-82d2-24ff9b9556dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"c87ec424-8702-45c5-ad00-546ddb825875","type":"BasicTicker"}},"id":"d9f81aad-8c7a-45fb-bcfa-aae280b3788a","type":"LinearAxis"},{"attributes":{"plot":{"id":"a1118765-9b42-47f4-82d2-24ff9b9556dc","subtype":"Figure","type":"Plot"}},"id":"8c7a1dc3-8e90-4800-8b6d-f31186699d77","type":"HelpTool"},{"attributes":{"callback":null},"id":"ce8c9af4-62f5-41ca-8836-a35adbdae283","type":"DataRange1d"},{"attributes":{"plot":{"id":"b60f8717-d89a-4ab8-ab92-65f5baf0de0a","subtype":"Figure","type":"Plot"}},"id":"85e38f9c-fa2a-4f72-8456-fcd21958baf1","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"33f4e0d2-148e-47ef-a421-a0e9de1618c2","type":"DataRange1d"},{"attributes":{"plot":{"id":"b60f8717-d89a-4ab8-ab92-65f5baf0de0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"11d9865a-8bc9-4ce2-94a6-ceb5ecea2569","type":"BasicTicker"}},"id":"a2885086-2bfb-4ea9-a518-2592e5b93ec2","type":"Grid"},{"attributes":{"data_source":{"id":"078af222-a2f3-4f39-a59d-d87845688901","type":"ColumnDataSource"},"glyph":{"id":"e300e31d-ee66-4f47-ba90-a50b3802a762","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"1d28a590-82b6-43a2-841f-4579823cdc88","type":"Circle"},"selection_glyph":null},"id":"93b33838-8f4a-467a-a9ff-9117f5b1f01a","type":"GlyphRenderer"},{"attributes":{},"id":"dd6209f5-a85b-44fa-ab49-9c1bac297c6e","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"d291dae0-cae1-4776-aa46-181763f8d5ac","type":"BoxAnnotation"},"plot":{"id":"b60f8717-d89a-4ab8-ab92-65f5baf0de0a","subtype":"Figure","type":"Plot"}},"id":"30ec0adc-24b1-485f-8157-a03b9ed32d33","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"a1118765-9b42-47f4-82d2-24ff9b9556dc","subtype":"Figure","type":"Plot"}},"id":"cedfd484-b484-4ea8-9b29-9b33e87cdc22","type":"PanTool"},{"attributes":{"below":[{"id":"c5073ca6-6a48-4579-9d15-b50c3c24f830","type":"LinearAxis"}],"left":[{"id":"a054eeb5-c263-4dc0-9cf9-ee58f91f6f22","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"c5073ca6-6a48-4579-9d15-b50c3c24f830","type":"LinearAxis"},{"id":"04a842a0-44e4-46e2-a900-bb76768bd70c","type":"Grid"},{"id":"a054eeb5-c263-4dc0-9cf9-ee58f91f6f22","type":"LinearAxis"},{"id":"a5cb6ed6-6c9d-4764-b213-32849784200a","type":"Grid"},{"id":"9d8a5b45-8d6e-416e-8c5c-f840f2863316","type":"BoxAnnotation"},{"id":"9a09e7aa-58fe-4e4f-8e8d-0f1e0595c0e1","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"5af3993c-da41-4ccc-88de-bf4a52bd38bd","type":"ToolEvents"},"toolbar":{"id":"1311558e-8990-4efc-a0a6-6be46e7f1d78","type":"Toolbar"},"x_range":{"id":"6251228c-47e4-43bf-b681-ae33c4cbcabd","type":"DataRange1d"},"y_range":{"id":"33f4e0d2-148e-47ef-a421-a0e9de1618c2","type":"DataRange1d"}},"id":"0942858b-3743-4876-93db-7410a7ccc185","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"0942858b-3743-4876-93db-7410a7ccc185","subtype":"Figure","type":"Plot"}},"id":"a5a7d29d-c328-4657-8a70-d61a4194992c","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e19b4a62-df14-4016-9b38-921c63cf3316","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"920f7260-6286-447e-b9a1-f4a2980a526e","type":"Square"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"078af222-a2f3-4f39-a59d-d87845688901","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"b60f8717-d89a-4ab8-ab92-65f5baf0de0a","subtype":"Figure","type":"Plot"},{"id":"a1118765-9b42-47f4-82d2-24ff9b9556dc","subtype":"Figure","type":"Plot"},{"id":"0942858b-3743-4876-93db-7410a7ccc185","subtype":"Figure","type":"Plot"}]},"id":"24200b4a-ab88-41a7-9a5d-f8c8498a4236","type":"Column"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"cedfd484-b484-4ea8-9b29-9b33e87cdc22","type":"PanTool"},{"id":"fec7f3d4-d708-4c52-90d2-cd220a8bf519","type":"WheelZoomTool"},{"id":"341259ec-edb6-4cfe-b6fb-715e9ec2071d","type":"BoxZoomTool"},{"id":"c6aa025f-df26-442e-9dad-c54bcb15ef54","type":"SaveTool"},{"id":"34d52529-feba-4f8f-8545-7cc9594daaf0","type":"ResetTool"},{"id":"8c7a1dc3-8e90-4800-8b6d-f31186699d77","type":"HelpTool"}]},"id":"3a77c97c-6fdd-49cf-a268-766f62a478b5","type":"Toolbar"},{"attributes":{},"id":"11d9865a-8bc9-4ce2-94a6-ceb5ecea2569","type":"BasicTicker"},{"attributes":{"plot":{"id":"a1118765-9b42-47f4-82d2-24ff9b9556dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"c87ec424-8702-45c5-ad00-546ddb825875","type":"BasicTicker"}},"id":"963e9f90-ba0b-45be-8ad7-17bd1dad85c0","type":"Grid"},{"attributes":{"overlay":{"id":"e19b4a62-df14-4016-9b38-921c63cf3316","type":"BoxAnnotation"},"plot":{"id":"a1118765-9b42-47f4-82d2-24ff9b9556dc","subtype":"Figure","type":"Plot"}},"id":"341259ec-edb6-4cfe-b6fb-715e9ec2071d","type":"BoxZoomTool"},{"attributes":{},"id":"709bda08-0fe8-4c54-94e1-a64e93b50b0a","type":"ToolEvents"},{"attributes":{"plot":{"id":"0942858b-3743-4876-93db-7410a7ccc185","subtype":"Figure","type":"Plot"}},"id":"ddfa7d3b-a989-4239-afc3-2752324c04af","type":"HelpTool"},{"attributes":{"callback":null},"id":"6251228c-47e4-43bf-b681-ae33c4cbcabd","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"18e302ee-c37a-4925-a1c7-0561ea74ab2e","type":"Triangle"},{"attributes":{"plot":{"id":"a1118765-9b42-47f4-82d2-24ff9b9556dc","subtype":"Figure","type":"Plot"}},"id":"34d52529-feba-4f8f-8545-7cc9594daaf0","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"332b9e67-024e-40eb-bbcd-6f49c2863762","type":"Triangle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e300e31d-ee66-4f47-ba90-a50b3802a762","type":"Circle"},{"attributes":{"plot":{"id":"0942858b-3743-4876-93db-7410a7ccc185","subtype":"Figure","type":"Plot"}},"id":"96f06e79-8662-42d6-9792-64174d91d0ee","type":"ResetTool"},{"attributes":{"formatter":{"id":"2eca2b76-d560-4f31-8cfa-6314d86d4d75","type":"BasicTickFormatter"},"plot":{"id":"0942858b-3743-4876-93db-7410a7ccc185","subtype":"Figure","type":"Plot"},"ticker":{"id":"c23c40e3-3982-44be-9edb-351f08ffb20b","type":"BasicTicker"}},"id":"c5073ca6-6a48-4579-9d15-b50c3c24f830","type":"LinearAxis"},{"attributes":{"plot":{"id":"a1118765-9b42-47f4-82d2-24ff9b9556dc","subtype":"Figure","type":"Plot"}},"id":"c6aa025f-df26-442e-9dad-c54bcb15ef54","type":"SaveTool"},{"attributes":{"callback":null},"id":"3140e92c-7934-4a1c-8f10-9400fbdb9cde","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9d8a5b45-8d6e-416e-8c5c-f840f2863316","type":"BoxAnnotation"},{"attributes":{},"id":"8f53fba6-6853-4e68-a907-cc06dfbb47a4","type":"BasicTickFormatter"},{"attributes":{},"id":"b4678f67-8972-443e-b177-bb6e1c6a9c70","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"f04a5452-5668-43b3-a297-7e3337d7b9aa","type":"DataRange1d"},{"attributes":{},"id":"c20b8e42-c292-4769-a013-33a1776dc709","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a5a7d29d-c328-4657-8a70-d61a4194992c","type":"PanTool"},{"id":"93b0069e-82b4-4dd4-8dde-9d64e699fd44","type":"WheelZoomTool"},{"id":"950a0d4f-67e9-4b42-b77a-0d95510d2fbb","type":"BoxZoomTool"},{"id":"df6b583d-61b0-45c8-9ae8-5d6da8af394e","type":"SaveTool"},{"id":"96f06e79-8662-42d6-9792-64174d91d0ee","type":"ResetTool"},{"id":"ddfa7d3b-a989-4239-afc3-2752324c04af","type":"HelpTool"}]},"id":"1311558e-8990-4efc-a0a6-6be46e7f1d78","type":"Toolbar"},{"attributes":{"plot":{"id":"0942858b-3743-4876-93db-7410a7ccc185","subtype":"Figure","type":"Plot"}},"id":"df6b583d-61b0-45c8-9ae8-5d6da8af394e","type":"SaveTool"},{"attributes":{"overlay":{"id":"9d8a5b45-8d6e-416e-8c5c-f840f2863316","type":"BoxAnnotation"},"plot":{"id":"0942858b-3743-4876-93db-7410a7ccc185","subtype":"Figure","type":"Plot"}},"id":"950a0d4f-67e9-4b42-b77a-0d95510d2fbb","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"0942858b-3743-4876-93db-7410a7ccc185","subtype":"Figure","type":"Plot"}},"id":"93b0069e-82b4-4dd4-8dde-9d64e699fd44","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"b60f8717-d89a-4ab8-ab92-65f5baf0de0a","subtype":"Figure","type":"Plot"},"ticker":{"id":"232eb6a0-48a1-4e7b-b50a-f4c20f8aafb8","type":"BasicTicker"}},"id":"4ec284cb-109c-4e7c-b1da-cd03e8e50273","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"1d28a590-82b6-43a2-841f-4579823cdc88","type":"Circle"},{"attributes":{"plot":{"id":"b60f8717-d89a-4ab8-ab92-65f5baf0de0a","subtype":"Figure","type":"Plot"}},"id":"620c3cfc-0bee-407b-a33b-14664616103c","type":"SaveTool"},{"attributes":{"data_source":{"id":"04a80c03-6521-4a63-b5df-724c76141264","type":"ColumnDataSource"},"glyph":{"id":"c5466f49-bd74-48a7-a76c-012878f1a01b","type":"Square"},"hover_glyph":null,"nonselection_glyph":{"id":"920f7260-6286-447e-b9a1-f4a2980a526e","type":"Square"},"selection_glyph":null},"id":"9a09e7aa-58fe-4e4f-8e8d-0f1e0595c0e1","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"9f20dd56-2165-48e4-99f4-ac2a1a9b0297","type":"BasicTickFormatter"},"plot":{"id":"a1118765-9b42-47f4-82d2-24ff9b9556dc","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea8d66bd-fae1-426c-841f-5e1145463751","type":"BasicTicker"}},"id":"0af0b938-a9ea-4547-bed8-d7705d36ed91","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"35d1a3e7-fffe-427a-a2dd-d38ea429e285","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"35d1a3e7-fffe-427a-a2dd-d38ea429e285","type":"ColumnDataSource"},"glyph":{"id":"18e302ee-c37a-4925-a1c7-0561ea74ab2e","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":{"id":"332b9e67-024e-40eb-bbcd-6f49c2863762","type":"Triangle"},"selection_glyph":null},"id":"47f5b69c-1a49-4cbb-8af4-7799abe0ffc7","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b60f8717-d89a-4ab8-ab92-65f5baf0de0a","subtype":"Figure","type":"Plot"}},"id":"ec2b17ae-d535-4e8a-9fa3-0ea066259dc7","type":"HelpTool"},{"attributes":{"plot":{"id":"0942858b-3743-4876-93db-7410a7ccc185","subtype":"Figure","type":"Plot"},"ticker":{"id":"c23c40e3-3982-44be-9edb-351f08ffb20b","type":"BasicTicker"}},"id":"04a842a0-44e4-46e2-a900-bb76768bd70c","type":"Grid"},{"attributes":{},"id":"c23c40e3-3982-44be-9edb-351f08ffb20b","type":"BasicTicker"}],"root_ids":["24200b4a-ab88-41a7-9a5d-f8c8498a4236"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"03ffbaa9-4ba5-450d-84f6-d46914af2eb0","elementid":"7e492b3d-f682-44ba-b345-153dbbba94b6","modelid":"24200b4a-ab88-41a7-9a5d-f8c8498a4236"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
