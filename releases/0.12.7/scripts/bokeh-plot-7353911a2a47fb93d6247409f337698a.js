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
      };var element = document.getElementById("61bca64e-7a98-4701-97f4-0d69c6062aeb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '61bca64e-7a98-4701-97f4-0d69c6062aeb' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"702603d5-6682-45dc-83d1-66b49a40700a":{"roots":{"references":[{"attributes":{"formatter":{"id":"b87be1ba-aa72-4f25-bde0-012b485d1985","type":"BasicTickFormatter"},"plot":{"id":"8e2fffa3-0db5-48e8-bf5b-f516d0587830","subtype":"Figure","type":"Plot"},"ticker":{"id":"796f0772-8f6e-4e78-93c7-ec3aebfae0a3","type":"BasicTicker"}},"id":"22bd0d5f-1bd2-4903-bec5-218dfb1f5b17","type":"LinearAxis"},{"attributes":{},"id":"8c63bb83-d423-48d0-b09f-840367040751","type":"BasicTickFormatter"},{"attributes":{},"id":"07e5f1c2-0eda-4a5d-8a85-71f7c964628e","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"07e5f1c2-0eda-4a5d-8a85-71f7c964628e","type":"PanTool"},{"id":"b196bba2-2bdd-46a7-bcb8-fd5c69013227","type":"WheelZoomTool"},{"id":"34a657fe-1fb7-4d51-9dde-2d691a33ab83","type":"BoxZoomTool"},{"id":"ac784517-249b-4eff-8e9e-aa6a23d72089","type":"SaveTool"},{"id":"b0b3f781-33ac-4ff8-beb0-eba60777abea","type":"ResetTool"},{"id":"40e7905c-2bc8-4548-a412-e59545f516d4","type":"HelpTool"}]},"id":"613ed363-0a16-412d-9fb9-2efeb87a2356","type":"Toolbar"},{"attributes":{},"id":"ac784517-249b-4eff-8e9e-aa6a23d72089","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f72b7bd3-a7c0-442a-8135-44a64b9870de","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c578d501-1708-4c40-826d-85592a03f87e","type":"PanTool"},{"id":"115e4cbb-5959-4d9b-8b47-902b7f3e7640","type":"WheelZoomTool"},{"id":"5df287aa-beb8-4816-aa3b-80f160c82ea5","type":"BoxZoomTool"},{"id":"3147fd1b-997b-4068-b170-dd25b699137c","type":"SaveTool"},{"id":"cc1b7540-79f2-40f7-b11a-72ceeb685bd1","type":"ResetTool"},{"id":"9b34fc54-9e6a-418c-9af2-9c3b95c8341f","type":"HelpTool"}]},"id":"b65bec2e-176b-4635-970e-1a397acdcbd5","type":"Toolbar"},{"attributes":{},"id":"c578d501-1708-4c40-826d-85592a03f87e","type":"PanTool"},{"attributes":{},"id":"33f49bce-de8b-4902-9f77-e783bd6e7f58","type":"LinearScale"},{"attributes":{"below":[{"id":"2ea42328-9f14-4493-b373-34d1934ca8e4","type":"LinearAxis"}],"left":[{"id":"a235c467-af6f-4e31-9ba1-4922fcebb894","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"2ea42328-9f14-4493-b373-34d1934ca8e4","type":"LinearAxis"},{"id":"464ac967-1b91-4d78-a42b-8231a04c6fa7","type":"Grid"},{"id":"a235c467-af6f-4e31-9ba1-4922fcebb894","type":"LinearAxis"},{"id":"82e70389-279f-40c3-a02d-7b019e976786","type":"Grid"},{"id":"88c45539-7791-4c74-977d-ab9f3dfb897e","type":"BoxAnnotation"},{"id":"cbe86266-1506-4777-ad20-321ea5b8a1c3","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"b65bec2e-176b-4635-970e-1a397acdcbd5","type":"Toolbar"},"x_range":{"id":"569d8b2e-75f3-427c-97db-ad53f5e5b2fa","type":"DataRange1d"},"x_scale":{"id":"33f49bce-de8b-4902-9f77-e783bd6e7f58","type":"LinearScale"},"y_range":{"id":"0a0d5f59-e1cd-4ddc-bb24-bbb693de65b7","type":"DataRange1d"},"y_scale":{"id":"7fce8fef-298a-49ce-aa8c-893727de5a5e","type":"LinearScale"}},"id":"fe7dad88-d3de-4628-976e-4fa58fcb1fb5","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"b9a0da9c-3c0f-41b3-9464-ec4262b3e74b","type":"ColumnDataSource"}},"id":"ec6f569d-8f31-426a-a2cc-16671b54ac1f","type":"CDSView"},{"attributes":{"data_source":{"id":"7f746859-8874-4d8e-a093-682f35f6cf8e","type":"ColumnDataSource"},"glyph":{"id":"f72b7bd3-a7c0-442a-8135-44a64b9870de","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"34205a4f-c38b-49eb-ae02-59174a832bc8","type":"Circle"},"selection_glyph":null,"view":{"id":"46e1b05d-ccc0-45b5-ba23-65a9e84ba472","type":"CDSView"}},"id":"cbe86266-1506-4777-ad20-321ea5b8a1c3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"b9a0da9c-3c0f-41b3-9464-ec4262b3e74b","type":"ColumnDataSource"},{"attributes":{},"id":"796f0772-8f6e-4e78-93c7-ec3aebfae0a3","type":"BasicTicker"},{"attributes":{"formatter":{"id":"efc27816-4b8f-4c9c-bb00-a3870e037a00","type":"BasicTickFormatter"},"plot":{"id":"fe7dad88-d3de-4628-976e-4fa58fcb1fb5","subtype":"Figure","type":"Plot"},"ticker":{"id":"1dc2e395-1321-45ba-8d06-0511cb5e6ba4","type":"BasicTicker"}},"id":"a235c467-af6f-4e31-9ba1-4922fcebb894","type":"LinearAxis"},{"attributes":{"callback":null},"id":"d21056fb-933a-4f70-ae99-dc7568ba8902","type":"DataRange1d"},{"attributes":{},"id":"b196bba2-2bdd-46a7-bcb8-fd5c69013227","type":"WheelZoomTool"},{"attributes":{},"id":"3147fd1b-997b-4068-b170-dd25b699137c","type":"SaveTool"},{"attributes":{},"id":"474b676f-55c5-4585-96ed-68dda41be8b5","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"7f746859-8874-4d8e-a093-682f35f6cf8e","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"88c45539-7791-4c74-977d-ab9f3dfb897e","type":"BoxAnnotation"}},"id":"5df287aa-beb8-4816-aa3b-80f160c82ea5","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5ec294e3-f5ee-438e-9602-20dbf5792d04","type":"BoxAnnotation"},{"attributes":{},"id":"9b34fc54-9e6a-418c-9af2-9c3b95c8341f","type":"HelpTool"},{"attributes":{"formatter":{"id":"145cfc2a-9093-40b6-a488-7bf4cbd7a194","type":"BasicTickFormatter"},"plot":{"id":"8e2fffa3-0db5-48e8-bf5b-f516d0587830","subtype":"Figure","type":"Plot"},"ticker":{"id":"1847a3e1-8199-45a4-a41c-f8966920ba1d","type":"BasicTicker"}},"id":"20fc338a-09bc-47c9-8cdd-c7d762c0c758","type":"LinearAxis"},{"attributes":{},"id":"1847a3e1-8199-45a4-a41c-f8966920ba1d","type":"BasicTicker"},{"attributes":{"below":[{"id":"08fd2de8-5997-4af9-98bd-b05ee0bb0cb4","type":"LinearAxis"}],"left":[{"id":"59de1e92-4c6a-48e2-a784-7a9a8de93521","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"08fd2de8-5997-4af9-98bd-b05ee0bb0cb4","type":"LinearAxis"},{"id":"cffef988-1c83-4793-8586-19b1fd3203fa","type":"Grid"},{"id":"59de1e92-4c6a-48e2-a784-7a9a8de93521","type":"LinearAxis"},{"id":"571fcdfc-8c8c-49bd-8338-a3052781bd17","type":"Grid"},{"id":"5ec294e3-f5ee-438e-9602-20dbf5792d04","type":"BoxAnnotation"},{"id":"4cd94004-a8be-4e33-bc58-f530132e9fa9","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"012f68cd-4cc2-44ce-89aa-751d32c1a2ed","type":"Toolbar"},"x_range":{"id":"dfcb73f9-7694-41ce-aeec-c93dac6cd848","type":"DataRange1d"},"x_scale":{"id":"595221d2-4378-4e9d-8ea9-a1fe5dd9b2a9","type":"LinearScale"},"y_range":{"id":"b545a880-89bd-4168-97c3-e4d4500e7dbe","type":"DataRange1d"},"y_scale":{"id":"3ffeb363-7321-4ed0-a249-fa2145b1e7ce","type":"LinearScale"}},"id":"8619e846-f1df-4fd2-8c2f-c9c99a335e5e","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"9226e5b4-bd70-4d79-baff-905459b3539c","type":"Triangle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"88c45539-7791-4c74-977d-ab9f3dfb897e","type":"BoxAnnotation"},{"attributes":{},"id":"40e7905c-2bc8-4548-a412-e59545f516d4","type":"HelpTool"},{"attributes":{},"id":"1dc2e395-1321-45ba-8d06-0511cb5e6ba4","type":"BasicTicker"},{"attributes":{"source":{"id":"7f746859-8874-4d8e-a093-682f35f6cf8e","type":"ColumnDataSource"}},"id":"46e1b05d-ccc0-45b5-ba23-65a9e84ba472","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bf1785ad-8ab8-4911-a281-aa60a04240bb","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"b9a0da9c-3c0f-41b3-9464-ec4262b3e74b","type":"ColumnDataSource"},"glyph":{"id":"34084c73-3a30-4cfc-9fe3-a9f32c053b7e","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9226e5b4-bd70-4d79-baff-905459b3539c","type":"Triangle"},"selection_glyph":null,"view":{"id":"ec6f569d-8f31-426a-a2cc-16671b54ac1f","type":"CDSView"}},"id":"c6866eda-8109-4ae0-bc11-2f7d1c6f9bf9","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8e2fffa3-0db5-48e8-bf5b-f516d0587830","subtype":"Figure","type":"Plot"},"ticker":{"id":"1847a3e1-8199-45a4-a41c-f8966920ba1d","type":"BasicTicker"}},"id":"ca3d9f18-d970-4a9d-97e4-c8f62cd8c262","type":"Grid"},{"attributes":{},"id":"eab77332-9250-4ec3-82bf-776431ae2039","type":"ResetTool"},{"attributes":{},"id":"96ae855d-071b-4ba7-9952-00283a59c149","type":"LinearScale"},{"attributes":{},"id":"115e4cbb-5959-4d9b-8b47-902b7f3e7640","type":"WheelZoomTool"},{"attributes":{},"id":"b0b3f781-33ac-4ff8-beb0-eba60777abea","type":"ResetTool"},{"attributes":{},"id":"efc27816-4b8f-4c9c-bb00-a3870e037a00","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"fe7dad88-d3de-4628-976e-4fa58fcb1fb5","subtype":"Figure","type":"Plot"},{"id":"8e2fffa3-0db5-48e8-bf5b-f516d0587830","subtype":"Figure","type":"Plot"},{"id":"8619e846-f1df-4fd2-8c2f-c9c99a335e5e","subtype":"Figure","type":"Plot"}]},"id":"56c7f112-2916-4c24-9e43-dad582861698","type":"Row"},{"attributes":{},"id":"7fce8fef-298a-49ce-aa8c-893727de5a5e","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"8e2fffa3-0db5-48e8-bf5b-f516d0587830","subtype":"Figure","type":"Plot"},"ticker":{"id":"796f0772-8f6e-4e78-93c7-ec3aebfae0a3","type":"BasicTicker"}},"id":"025e4627-e0c5-468a-9e42-daf2a94f373e","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"line_alpha":{"value":0.5},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34084c73-3a30-4cfc-9fe3-a9f32c053b7e","type":"Triangle"},{"attributes":{"callback":null},"id":"42f3957d-1376-4bc3-8912-50040cc6246e","type":"DataRange1d"},{"attributes":{},"id":"c6bc4616-6cdb-47be-8c35-1ecb31f8bad0","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"0a0d5f59-e1cd-4ddc-bb24-bbb693de65b7","type":"DataRange1d"},{"attributes":{},"id":"145cfc2a-9093-40b6-a488-7bf4cbd7a194","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"5ec294e3-f5ee-438e-9602-20dbf5792d04","type":"BoxAnnotation"}},"id":"6092965c-f7dc-4101-b482-351749b2283a","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"dfcb73f9-7694-41ce-aeec-c93dac6cd848","type":"DataRange1d"},{"attributes":{},"id":"cc1b7540-79f2-40f7-b11a-72ceeb685bd1","type":"ResetTool"},{"attributes":{"below":[{"id":"20fc338a-09bc-47c9-8cdd-c7d762c0c758","type":"LinearAxis"}],"left":[{"id":"22bd0d5f-1bd2-4903-bec5-218dfb1f5b17","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"20fc338a-09bc-47c9-8cdd-c7d762c0c758","type":"LinearAxis"},{"id":"ca3d9f18-d970-4a9d-97e4-c8f62cd8c262","type":"Grid"},{"id":"22bd0d5f-1bd2-4903-bec5-218dfb1f5b17","type":"LinearAxis"},{"id":"025e4627-e0c5-468a-9e42-daf2a94f373e","type":"Grid"},{"id":"bf1785ad-8ab8-4911-a281-aa60a04240bb","type":"BoxAnnotation"},{"id":"c6866eda-8109-4ae0-bc11-2f7d1c6f9bf9","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"613ed363-0a16-412d-9fb9-2efeb87a2356","type":"Toolbar"},"x_range":{"id":"d21056fb-933a-4f70-ae99-dc7568ba8902","type":"DataRange1d"},"x_scale":{"id":"96ae855d-071b-4ba7-9952-00283a59c149","type":"LinearScale"},"y_range":{"id":"42f3957d-1376-4bc3-8912-50040cc6246e","type":"DataRange1d"},"y_scale":{"id":"1ece35de-2e33-4816-a493-e2ccb8b9480e","type":"LinearScale"}},"id":"8e2fffa3-0db5-48e8-bf5b-f516d0587830","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"c6dabb25-8111-4d74-96fc-64046757ea4a","type":"ColumnDataSource"},"glyph":{"id":"bf905f9e-1914-478e-b26f-e12d6369a5e6","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15a834be-f596-45e4-86c7-08b204f30d6c","type":"Square"},"selection_glyph":null,"view":{"id":"4c8e0bfa-53bb-4f44-bdc9-44868779e568","type":"CDSView"}},"id":"4cd94004-a8be-4e33-bc58-f530132e9fa9","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"34205a4f-c38b-49eb-ae02-59174a832bc8","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"fe7dad88-d3de-4628-976e-4fa58fcb1fb5","subtype":"Figure","type":"Plot"},"ticker":{"id":"1dc2e395-1321-45ba-8d06-0511cb5e6ba4","type":"BasicTicker"}},"id":"82e70389-279f-40c3-a02d-7b019e976786","type":"Grid"},{"attributes":{},"id":"595221d2-4378-4e9d-8ea9-a1fe5dd9b2a9","type":"LinearScale"},{"attributes":{},"id":"1ece35de-2e33-4816-a493-e2ccb8b9480e","type":"LinearScale"},{"attributes":{},"id":"b87be1ba-aa72-4f25-bde0-012b485d1985","type":"BasicTickFormatter"},{"attributes":{},"id":"3ffeb363-7321-4ed0-a249-fa2145b1e7ce","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9fc0a9bf-7974-4eda-9306-d8ea2bcec5f9","type":"PanTool"},{"id":"c6bc4616-6cdb-47be-8c35-1ecb31f8bad0","type":"WheelZoomTool"},{"id":"6092965c-f7dc-4101-b482-351749b2283a","type":"BoxZoomTool"},{"id":"1210ac66-f04a-42cf-aec4-494d79a63767","type":"SaveTool"},{"id":"eab77332-9250-4ec3-82bf-776431ae2039","type":"ResetTool"},{"id":"2bf3b9e5-7095-4390-983b-b62dc4aed2c9","type":"HelpTool"}]},"id":"012f68cd-4cc2-44ce-89aa-751d32c1a2ed","type":"Toolbar"},{"attributes":{"callback":null},"id":"569d8b2e-75f3-427c-97db-ad53f5e5b2fa","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"olive"},"line_alpha":{"value":0.5},"line_color":{"value":"olive"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bf905f9e-1914-478e-b26f-e12d6369a5e6","type":"Square"},{"attributes":{"callback":null},"id":"b545a880-89bd-4168-97c3-e4d4500e7dbe","type":"DataRange1d"},{"attributes":{"plot":{"id":"8619e846-f1df-4fd2-8c2f-c9c99a335e5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e5c7144-f4dd-4655-bf5f-702009f1a3df","type":"BasicTicker"}},"id":"cffef988-1c83-4793-8586-19b1fd3203fa","type":"Grid"},{"attributes":{"formatter":{"id":"e0bc15f3-ca8a-4db0-af3e-2e1c13827797","type":"BasicTickFormatter"},"plot":{"id":"8619e846-f1df-4fd2-8c2f-c9c99a335e5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"7e5c7144-f4dd-4655-bf5f-702009f1a3df","type":"BasicTicker"}},"id":"08fd2de8-5997-4af9-98bd-b05ee0bb0cb4","type":"LinearAxis"},{"attributes":{},"id":"d7b03528-75d2-4e08-a651-3ec23a6f04c0","type":"BasicTicker"},{"attributes":{"formatter":{"id":"8c63bb83-d423-48d0-b09f-840367040751","type":"BasicTickFormatter"},"plot":{"id":"8619e846-f1df-4fd2-8c2f-c9c99a335e5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f8b9902-49f3-4b0a-b1f2-8595a4b19058","type":"BasicTicker"}},"id":"59de1e92-4c6a-48e2-a784-7a9a8de93521","type":"LinearAxis"},{"attributes":{},"id":"7e5c7144-f4dd-4655-bf5f-702009f1a3df","type":"BasicTicker"},{"attributes":{},"id":"2f8b9902-49f3-4b0a-b1f2-8595a4b19058","type":"BasicTicker"},{"attributes":{"plot":{"id":"fe7dad88-d3de-4628-976e-4fa58fcb1fb5","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7b03528-75d2-4e08-a651-3ec23a6f04c0","type":"BasicTicker"}},"id":"464ac967-1b91-4d78-a42b-8231a04c6fa7","type":"Grid"},{"attributes":{},"id":"9fc0a9bf-7974-4eda-9306-d8ea2bcec5f9","type":"PanTool"},{"attributes":{"formatter":{"id":"474b676f-55c5-4585-96ed-68dda41be8b5","type":"BasicTickFormatter"},"plot":{"id":"fe7dad88-d3de-4628-976e-4fa58fcb1fb5","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7b03528-75d2-4e08-a651-3ec23a6f04c0","type":"BasicTicker"}},"id":"2ea42328-9f14-4493-b373-34d1934ca8e4","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"8619e846-f1df-4fd2-8c2f-c9c99a335e5e","subtype":"Figure","type":"Plot"},"ticker":{"id":"2f8b9902-49f3-4b0a-b1f2-8595a4b19058","type":"BasicTicker"}},"id":"571fcdfc-8c8c-49bd-8338-a3052781bd17","type":"Grid"},{"attributes":{},"id":"2bf3b9e5-7095-4390-983b-b62dc4aed2c9","type":"HelpTool"},{"attributes":{"overlay":{"id":"bf1785ad-8ab8-4911-a281-aa60a04240bb","type":"BoxAnnotation"}},"id":"34a657fe-1fb7-4d51-9dde-2d691a33ab83","type":"BoxZoomTool"},{"attributes":{"source":{"id":"c6dabb25-8111-4d74-96fc-64046757ea4a","type":"ColumnDataSource"}},"id":"4c8e0bfa-53bb-4f44-bdc9-44868779e568","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"15a834be-f596-45e4-86c7-08b204f30d6c","type":"Square"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"c6dabb25-8111-4d74-96fc-64046757ea4a","type":"ColumnDataSource"},{"attributes":{},"id":"e0bc15f3-ca8a-4db0-af3e-2e1c13827797","type":"BasicTickFormatter"},{"attributes":{},"id":"1210ac66-f04a-42cf-aec4-494d79a63767","type":"SaveTool"}],"root_ids":["56c7f112-2916-4c24-9e43-dad582861698"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"702603d5-6682-45dc-83d1-66b49a40700a","elementid":"61bca64e-7a98-4701-97f4-0d69c6062aeb","modelid":"56c7f112-2916-4c24-9e43-dad582861698"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
