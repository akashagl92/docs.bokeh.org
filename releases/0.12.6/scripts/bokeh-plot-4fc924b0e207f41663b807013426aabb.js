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
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("f4928e0b-1234-41f3-9eb1-d8c1ea599688");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f4928e0b-1234-41f3-9eb1-d8c1ea599688' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"eb15db7f-6682-4c7e-b3d1-1e3296079cc7":{"roots":{"references":[{"attributes":{},"id":"b3f56aa8-c500-40ff-b4d0-1ceb0c1885e9","type":"LinearScale"},{"attributes":{"plot":{"id":"67d823a0-8f02-42e5-9f4d-6b581b8c2464","type":"Plot"},"ticker":{"id":"dffe4bef-8511-409e-9470-32b1f1c00ed8","type":"BasicTicker"}},"id":"f50db930-0c0c-44b8-a574-7cc23d8c9d42","type":"Grid"},{"attributes":{},"id":"051f5d27-bbe6-492c-bbba-aac399020b23","type":"LinearScale"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"91619941-10b2-469c-bb44-544b62cfce73","type":"BasicTickFormatter"},"plot":{"id":"dc291ad5-0b63-44b3-bcb3-2b16c370a47e","type":"Plot"},"ticker":{"id":"816bd6ea-0b27-476c-9cb5-acda11d7cf23","type":"BasicTicker"}},"id":"9366f6f0-d562-4f7b-b7d6-2610f9b74915","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"1fd1801d-5f6b-4472-a4e7-7f01b11f957a","type":"Plot"},"ticker":{"id":"b1e9f334-0c13-4cff-905d-61e73387ee42","type":"BasicTicker"}},"id":"478d88d8-0ed7-4822-b27d-b0dfd0395824","type":"Grid"},{"attributes":{},"id":"d277c183-6aa9-41f5-bd2f-694e76a83525","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"84e0d043-3844-426b-8695-37e063f036ab","type":"BasicTickFormatter"},"plot":{"id":"dc291ad5-0b63-44b3-bcb3-2b16c370a47e","type":"Plot"},"ticker":{"id":"c8ec452a-e6f8-4951-bfce-a3d2312c9600","type":"BasicTicker"}},"id":"8f88706f-0910-454c-bf35-354bf23f3150","type":"LinearAxis"},{"attributes":{"plot":null,"text":"II"},"id":"024e5052-16de-4b62-8385-1fa173c9d707","type":"Title"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"ba035fa1-d8ac-4b48-8cfd-f2cec36b27ff","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"309e9822-6be8-40aa-b8de-b9387d795b09","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ba035fa1-d8ac-4b48-8cfd-f2cec36b27ff","type":"LinearAxis"},{"id":"309e9822-6be8-40aa-b8de-b9387d795b09","type":"LinearAxis"},{"id":"feba226d-c127-407d-badd-dab02b897baf","type":"Grid"},{"id":"478d88d8-0ed7-4822-b27d-b0dfd0395824","type":"Grid"},{"id":"804259d9-e080-4684-9a33-6cc282ba8273","type":"GlyphRenderer"},{"id":"3ff6e8e7-a4a0-49d1-b4bc-cec6caeef0b2","type":"GlyphRenderer"}],"title":{"id":"9dd1b7ed-dde5-427f-b2bb-80afdb9023cd","type":"Title"},"tool_events":{"id":"ca9d1777-562f-4fc6-902c-c1333d3ba1a8","type":"ToolEvents"},"toolbar":{"id":"767b020e-d08c-4036-a71f-ff6daca22ecf","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5d9347fa-4dec-47e9-8618-4f979198156b","type":"Range1d"},"x_scale":{"id":"9deb654f-6c5d-4b31-b115-b07e0ecd4083","type":"LinearScale"},"y_range":{"id":"8258cc33-4794-4d07-9695-ca72547cbef8","type":"Range1d"},"y_scale":{"id":"45b56758-40ea-4e37-aa5f-e713eb749ced","type":"LinearScale"}},"id":"1fd1801d-5f6b-4472-a4e7-7f01b11f957a","type":"Plot"},{"attributes":{"data_source":{"id":"bffe57ca-33e4-493d-8d5c-4afcb6e8b032","type":"ColumnDataSource"},"glyph":{"id":"9fc5a7af-f3b5-43d0-8f45-54873f6bcf31","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"088caaaf-9fa5-4e27-9a82-b58c2804601c","type":"GlyphRenderer"},{"attributes":{},"id":"3afc1ed9-17d3-4c93-80b1-7bb234f37a56","type":"BasicTickFormatter"},{"attributes":{},"id":"cd6dcfd0-a32d-4b12-b3c6-5e3d29a50b9b","type":"ToolEvents"},{"attributes":{"plot":{"id":"7ca9aad3-005e-4c9a-a75d-47ab9e6c0e91","type":"Plot"},"ticker":{"id":"ec9ef1b9-6a5f-42c0-bdea-be6dbddfa3e6","type":"BasicTicker"}},"id":"0156a848-2d27-42a3-bedd-dd65678265cf","type":"Grid"},{"attributes":{},"id":"5e4f2f34-3566-4944-aad6-422f2359ea89","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f46e81a0-d45a-4d87-bf26-d619d9c1b02c","type":"Toolbar"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"bbee267d-1d45-486b-9966-d01901461a9b","type":"Line"},{"attributes":{"callback":null,"column_names":["xiv","xiii","xi","xii","yii","yiii","yi","yiv"],"data":{"xi":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiii":{"__ndarray__":"AAAAAAAAJEAAAAAAAAAgQAAAAAAAACpAAAAAAAAAIkAAAAAAAAAmQAAAAAAAACxAAAAAAAAAGEAAAAAAAAAQQAAAAAAAAChAAAAAAAAAHEAAAAAAAAAUQA==","dtype":"float64","shape":[11]},"xiv":{"__ndarray__":"AAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAzQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAgQA==","dtype":"float64","shape":[11]},"yi":{"__ndarray__":"FK5H4XoUIEDNzMzMzMwbQFK4HoXrUR5AH4XrUbieIUApXI/C9aggQOxRuB6F6yNA9ihcj8L1HEAK16NwPQoRQK5H4XoUriVASOF6FK5HE0C4HoXrUbgWQA==","dtype":"float64","shape":[11]},"yii":{"__ndarray__":"SOF6FK5HIkBI4XoUrkcgQHsUrkfheiFACtejcD2KIUCF61G4HoUiQDMzMzMzMyBAhetRuB6FGEDNzMzMzMwIQMP1KFyPQiJACtejcD0KHUD2KFyPwvUSQA==","dtype":"float64","shape":[11]},"yiii":{"__ndarray__":"16NwPQrXHUAUrkfhehQbQHsUrkfheilAcT0K16NwHEA9CtejcD0fQK5H4XoUriFAUrgehetRGECPwvUoXI8VQM3MzMzMTCBArkfhehSuGUDsUbgehesWQA==","dtype":"float64","shape":[11]},"yiv":{"__ndarray__":"UrgehetRGkAK16NwPQoXQNejcD0K1x5ArkfhehSuIUBxPQrXo/AgQClcj8L1KBxAAAAAAAAAFUAAAAAAAAApQD0K16NwPRZApHA9CtejH0CPwvUoXI8bQA==","dtype":"float64","shape":[11]}}},"id":"bffe57ca-33e4-493d-8d5c-4afcb6e8b032","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"beeebcd2-fa72-46dc-9883-d39be6474d9d","type":"Row"},{"id":"0f20c8fe-b6a2-4e63-8b9d-85bf9787e1e3","type":"Row"}]},"id":"e97b46d2-c690-441e-8dbc-d885f07ae422","type":"Column"},{"attributes":{"data_source":{"id":"bffe57ca-33e4-493d-8d5c-4afcb6e8b032","type":"ColumnDataSource"},"glyph":{"id":"5e1664c3-d21a-4d90-8214-90d605b273ca","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"7a93ac14-3792-411b-9d22-a27dd66c796d","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"dc291ad5-0b63-44b3-bcb3-2b16c370a47e","type":"Plot"},"ticker":{"id":"816bd6ea-0b27-476c-9cb5-acda11d7cf23","type":"BasicTicker"}},"id":"e13dfbff-823e-4cfe-b963-385c668d0476","type":"Grid"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"2f92ffdb-3484-49e9-9580-bf08802bbac5","type":"Line"},{"attributes":{},"id":"5a16686a-69da-4c56-9f86-a912d9d3ba90","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"67d823a0-8f02-42e5-9f4d-6b581b8c2464","type":"Plot"},"ticker":{"id":"5e4f2f34-3566-4944-aad6-422f2359ea89","type":"BasicTicker"}},"id":"154f71bc-a794-43b0-9a58-8d55c1cd1408","type":"Grid"},{"attributes":{},"id":"c8ec452a-e6f8-4951-bfce-a3d2312c9600","type":"BasicTicker"},{"attributes":{},"id":"ca9d1777-562f-4fc6-902c-c1333d3ba1a8","type":"ToolEvents"},{"attributes":{},"id":"fe62aacc-18f6-46da-86ef-4b112d47047a","type":"LinearScale"},{"attributes":{"plot":null,"text":"I"},"id":"c9f1cc47-d7bb-402e-89a3-8dcf48dc8a08","type":"Title"},{"attributes":{"data_source":{"id":"94832e37-2c0b-452c-9dff-f1d1e815f57c","type":"ColumnDataSource"},"glyph":{"id":"b597fdb3-2782-41fb-9795-e444e04d05ca","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"1a917bb8-3cbd-46ec-97e4-eec176acefe2","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiii"},"y":{"field":"yiii"}},"id":"dec935f2-bea9-4826-a40f-578384c5ae76","type":"Circle"},{"attributes":{},"id":"df6d2a9f-a1a2-47d9-82a5-26a77e218328","type":"ToolEvents"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"8258cc33-4794-4d07-9695-ca72547cbef8","type":"Range1d"},{"attributes":{},"id":"816bd6ea-0b27-476c-9cb5-acda11d7cf23","type":"BasicTicker"},{"attributes":{},"id":"4bb006ec-e23d-4925-9db2-80d61e22757e","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"bffe57ca-33e4-493d-8d5c-4afcb6e8b032","type":"ColumnDataSource"},"glyph":{"id":"dec935f2-bea9-4826-a40f-578384c5ae76","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"3ff6e8e7-a4a0-49d1-b4bc-cec6caeef0b2","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b597fdb3-2782-41fb-9795-e444e04d05ca","type":"Line"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"d277c183-6aa9-41f5-bd2f-694e76a83525","type":"BasicTickFormatter"},"plot":{"id":"67d823a0-8f02-42e5-9f4d-6b581b8c2464","type":"Plot"},"ticker":{"id":"5e4f2f34-3566-4944-aad6-422f2359ea89","type":"BasicTicker"}},"id":"768edd48-ed40-4eb6-857a-fc25c10f0f8d","type":"LinearAxis"},{"attributes":{},"id":"6101a3e1-dd46-4e8f-b204-950aef23d4a7","type":"LinearScale"},{"attributes":{},"id":"84e0d043-3844-426b-8695-37e063f036ab","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"94832e37-2c0b-452c-9dff-f1d1e815f57c","type":"ColumnDataSource"},"glyph":{"id":"2f92ffdb-3484-49e9-9580-bf08802bbac5","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"804259d9-e080-4684-9a33-6cc282ba8273","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"94832e37-2c0b-452c-9dff-f1d1e815f57c","type":"ColumnDataSource"},"glyph":{"id":"fc985888-15ed-45e9-9e1e-025952a8e599","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"6fbab57c-c9ff-4cfa-8c93-aa01fb4ab514","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xi"},"y":{"field":"yi"}},"id":"07723ef0-6ccd-49c7-a98d-04c978ae3808","type":"Circle"},{"attributes":{"data_source":{"id":"94832e37-2c0b-452c-9dff-f1d1e815f57c","type":"ColumnDataSource"},"glyph":{"id":"bbee267d-1d45-486b-9966-d01901461a9b","type":"Line"},"hover_glyph":null,"muted_glyph":null},"id":"a56bc634-a13e-4e2f-af57-9b0bd55c1aa9","type":"GlyphRenderer"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"756cc2b9-a522-483c-a90e-3350628e62eb","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"768edd48-ed40-4eb6-857a-fc25c10f0f8d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"756cc2b9-a522-483c-a90e-3350628e62eb","type":"LinearAxis"},{"id":"768edd48-ed40-4eb6-857a-fc25c10f0f8d","type":"LinearAxis"},{"id":"f50db930-0c0c-44b8-a574-7cc23d8c9d42","type":"Grid"},{"id":"154f71bc-a794-43b0-9a58-8d55c1cd1408","type":"Grid"},{"id":"6fbab57c-c9ff-4cfa-8c93-aa01fb4ab514","type":"GlyphRenderer"},{"id":"7991e107-fa5e-4dc5-b44b-80f4cd50b5c8","type":"GlyphRenderer"}],"title":{"id":"c9f1cc47-d7bb-402e-89a3-8dcf48dc8a08","type":"Title"},"tool_events":{"id":"df6d2a9f-a1a2-47d9-82a5-26a77e218328","type":"ToolEvents"},"toolbar":{"id":"8e02d848-1623-461f-9215-2137dce1c126","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5d9347fa-4dec-47e9-8618-4f979198156b","type":"Range1d"},"x_scale":{"id":"fe62aacc-18f6-46da-86ef-4b112d47047a","type":"LinearScale"},"y_range":{"id":"8258cc33-4794-4d07-9695-ca72547cbef8","type":"Range1d"},"y_scale":{"id":"b3f56aa8-c500-40ff-b4d0-1ceb0c1885e9","type":"LinearScale"}},"id":"67d823a0-8f02-42e5-9f4d-6b581b8c2464","type":"Plot"},{"attributes":{"children":[{"id":"67d823a0-8f02-42e5-9f4d-6b581b8c2464","type":"Plot"},{"id":"dc291ad5-0b63-44b3-bcb3-2b16c370a47e","type":"Plot"}]},"id":"beeebcd2-fa72-46dc-9883-d39be6474d9d","type":"Row"},{"attributes":{},"id":"91619941-10b2-469c-bb44-544b62cfce73","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xii"},"y":{"field":"yii"}},"id":"9fc5a7af-f3b5-43d0-8f45-54873f6bcf31","type":"Circle"},{"attributes":{},"id":"bb92ec82-6076-4f45-ba97-2eff3f162809","type":"BasicTickFormatter"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"3afc1ed9-17d3-4c93-80b1-7bb234f37a56","type":"BasicTickFormatter"},"plot":{"id":"1fd1801d-5f6b-4472-a4e7-7f01b11f957a","type":"Plot"},"ticker":{"id":"b1e9f334-0c13-4cff-905d-61e73387ee42","type":"BasicTicker"}},"id":"309e9822-6be8-40aa-b8de-b9387d795b09","type":"LinearAxis"},{"attributes":{"plot":null,"text":"IV"},"id":"61924332-6909-4cc7-9f47-edbf5f48c042","type":"Title"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"8da07291-f22d-4e0a-a283-669c6d63448a","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"ca7d9f0a-f80c-4545-ba5b-9186e6096e38","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8da07291-f22d-4e0a-a283-669c6d63448a","type":"LinearAxis"},{"id":"ca7d9f0a-f80c-4545-ba5b-9186e6096e38","type":"LinearAxis"},{"id":"0156a848-2d27-42a3-bedd-dd65678265cf","type":"Grid"},{"id":"a65a1671-20df-4618-80be-aa641b973069","type":"Grid"},{"id":"1a917bb8-3cbd-46ec-97e4-eec176acefe2","type":"GlyphRenderer"},{"id":"7a93ac14-3792-411b-9d22-a27dd66c796d","type":"GlyphRenderer"}],"title":{"id":"61924332-6909-4cc7-9f47-edbf5f48c042","type":"Title"},"tool_events":{"id":"8527d7cd-952b-47be-9774-197c42b8088a","type":"ToolEvents"},"toolbar":{"id":"f46e81a0-d45a-4d87-bf26-d619d9c1b02c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5d9347fa-4dec-47e9-8618-4f979198156b","type":"Range1d"},"x_scale":{"id":"7855440b-b7f4-4b94-afb0-515e3122c362","type":"LinearScale"},"y_range":{"id":"8258cc33-4794-4d07-9695-ca72547cbef8","type":"Range1d"},"y_scale":{"id":"29ba2974-884e-4072-9465-b554f2c5c960","type":"LinearScale"}},"id":"7ca9aad3-005e-4c9a-a75d-47ab9e6c0e91","type":"Plot"},{"attributes":{"children":[{"id":"1fd1801d-5f6b-4472-a4e7-7f01b11f957a","type":"Plot"},{"id":"7ca9aad3-005e-4c9a-a75d-47ab9e6c0e91","type":"Plot"}]},"id":"0f20c8fe-b6a2-4e63-8b9d-85bf9787e1e3","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"fbd18503-a366-4a18-bcb5-b597f7d8030a","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"7ca9aad3-005e-4c9a-a75d-47ab9e6c0e91","type":"Plot"},"ticker":{"id":"5a16686a-69da-4c56-9f86-a912d9d3ba90","type":"BasicTicker"}},"id":"a65a1671-20df-4618-80be-aa641b973069","type":"Grid"},{"attributes":{},"id":"b1e9f334-0c13-4cff-905d-61e73387ee42","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"8e02d848-1623-461f-9215-2137dce1c126","type":"Toolbar"},{"attributes":{"plot":null,"text":"III"},"id":"9dd1b7ed-dde5-427f-b2bb-80afdb9023cd","type":"Title"},{"attributes":{},"id":"7855440b-b7f4-4b94-afb0-515e3122c362","type":"LinearScale"},{"attributes":{},"id":"45b56758-40ea-4e37-aa5f-e713eb749ced","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#cc6633"},"line_color":{"value":"#cc6633"},"size":{"units":"screen","value":12},"x":{"field":"xiv"},"y":{"field":"yiv"}},"id":"5e1664c3-d21a-4d90-8214-90d605b273ca","type":"Circle"},{"attributes":{"plot":{"id":"dc291ad5-0b63-44b3-bcb3-2b16c370a47e","type":"Plot"},"ticker":{"id":"c8ec452a-e6f8-4951-bfce-a3d2312c9600","type":"BasicTicker"}},"id":"191aad68-bea3-4c79-90f5-9785fea09e95","type":"Grid"},{"attributes":{"line_color":{"value":"#666699"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc985888-15ed-45e9-9e1e-025952a8e599","type":"Line"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"449a11b7-2d0d-4d2f-87e0-554d0aa81897","type":"BasicTickFormatter"},"plot":{"id":"7ca9aad3-005e-4c9a-a75d-47ab9e6c0e91","type":"Plot"},"ticker":{"id":"5a16686a-69da-4c56-9f86-a912d9d3ba90","type":"BasicTicker"}},"id":"ca7d9f0a-f80c-4545-ba5b-9186e6096e38","type":"LinearAxis"},{"attributes":{"callback":null,"end":20.5,"start":-0.5},"id":"5d9347fa-4dec-47e9-8618-4f979198156b","type":"Range1d"},{"attributes":{},"id":"b1db7420-6e42-44db-99e4-6193d1346ab6","type":"BasicTicker"},{"attributes":{},"id":"29ba2974-884e-4072-9465-b554f2c5c960","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"767b020e-d08c-4036-a71f-ff6daca22ecf","type":"Toolbar"},{"attributes":{"plot":{"id":"1fd1801d-5f6b-4472-a4e7-7f01b11f957a","type":"Plot"},"ticker":{"id":"b1db7420-6e42-44db-99e4-6193d1346ab6","type":"BasicTicker"}},"id":"feba226d-c127-407d-badd-dab02b897baf","type":"Grid"},{"attributes":{},"id":"8527d7cd-952b-47be-9774-197c42b8088a","type":"ToolEvents"},{"attributes":{},"id":"449a11b7-2d0d-4d2f-87e0-554d0aa81897","type":"BasicTickFormatter"},{"attributes":{},"id":"ec9ef1b9-6a5f-42c0-bdea-be6dbddfa3e6","type":"BasicTicker"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"4bb006ec-e23d-4925-9db2-80d61e22757e","type":"BasicTickFormatter"},"plot":{"id":"7ca9aad3-005e-4c9a-a75d-47ab9e6c0e91","type":"Plot"},"ticker":{"id":"ec9ef1b9-6a5f-42c0-bdea-be6dbddfa3e6","type":"BasicTicker"}},"id":"8da07291-f22d-4e0a-a283-669c6d63448a","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"f9c035ce-f01b-41e7-bace-e642d1b9039f","type":"BasicTickFormatter"},"plot":{"id":"1fd1801d-5f6b-4472-a4e7-7f01b11f957a","type":"Plot"},"ticker":{"id":"b1db7420-6e42-44db-99e4-6193d1346ab6","type":"BasicTicker"}},"id":"ba035fa1-d8ac-4b48-8cfd-f2cec36b27ff","type":"LinearAxis"},{"attributes":{"axis_line_color":{"value":null},"formatter":{"id":"bb92ec82-6076-4f45-ba97-2eff3f162809","type":"BasicTickFormatter"},"plot":{"id":"67d823a0-8f02-42e5-9f4d-6b581b8c2464","type":"Plot"},"ticker":{"id":"dffe4bef-8511-409e-9470-32b1f1c00ed8","type":"BasicTicker"}},"id":"756cc2b9-a522-483c-a90e-3350628e62eb","type":"LinearAxis"},{"attributes":{},"id":"f9c035ce-f01b-41e7-bace-e642d1b9039f","type":"BasicTickFormatter"},{"attributes":{},"id":"9deb654f-6c5d-4b31-b115-b07e0ecd4083","type":"LinearScale"},{"attributes":{},"id":"dffe4bef-8511-409e-9470-32b1f1c00ed8","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"AAAAAAAA4L9WVVVVVVX9P6uqqqqqqhBAAAAAAAAAGkCrqqqqqqohQFZVVVVVVSZAAAAAAAAAK0CsqqqqqqovQKuqqqqqKjJAAAAAAACANEA=","dtype":"float64","shape":[10]},"y":{"__ndarray__":"AAAAAAAABkBWVVVVVVUPQFZVVVVVVRRAAAAAAAAAGUCrqqqqqqodQKuqqqqqKiFAAAAAAACAI0BWVVVVVdUlQKuqqqqqKihAAAAAAACAKkA=","dtype":"float64","shape":[10]}}},"id":"94832e37-2c0b-452c-9dff-f1d1e815f57c","type":"ColumnDataSource"},{"attributes":{"background_fill_color":{"value":"#e9e0db"},"below":[{"id":"8f88706f-0910-454c-bf35-354bf23f3150","type":"LinearAxis"}],"border_fill_color":{"value":"white"},"left":[{"id":"9366f6f0-d562-4f7b-b7d6-2610f9b74915","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8f88706f-0910-454c-bf35-354bf23f3150","type":"LinearAxis"},{"id":"9366f6f0-d562-4f7b-b7d6-2610f9b74915","type":"LinearAxis"},{"id":"191aad68-bea3-4c79-90f5-9785fea09e95","type":"Grid"},{"id":"e13dfbff-823e-4cfe-b963-385c668d0476","type":"Grid"},{"id":"a56bc634-a13e-4e2f-af57-9b0bd55c1aa9","type":"GlyphRenderer"},{"id":"088caaaf-9fa5-4e27-9a82-b58c2804601c","type":"GlyphRenderer"}],"title":{"id":"024e5052-16de-4b62-8385-1fa173c9d707","type":"Title"},"tool_events":{"id":"cd6dcfd0-a32d-4b12-b3c6-5e3d29a50b9b","type":"ToolEvents"},"toolbar":{"id":"fbd18503-a366-4a18-bcb5-b597f7d8030a","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"5d9347fa-4dec-47e9-8618-4f979198156b","type":"Range1d"},"x_scale":{"id":"6101a3e1-dd46-4e8f-b204-950aef23d4a7","type":"LinearScale"},"y_range":{"id":"8258cc33-4794-4d07-9695-ca72547cbef8","type":"Range1d"},"y_scale":{"id":"051f5d27-bbe6-492c-bbba-aac399020b23","type":"LinearScale"}},"id":"dc291ad5-0b63-44b3-bcb3-2b16c370a47e","type":"Plot"},{"attributes":{"data_source":{"id":"bffe57ca-33e4-493d-8d5c-4afcb6e8b032","type":"ColumnDataSource"},"glyph":{"id":"07723ef0-6ccd-49c7-a98d-04c978ae3808","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"7991e107-fa5e-4dc5-b44b-80f4cd50b5c8","type":"GlyphRenderer"}],"root_ids":["e97b46d2-c690-441e-8dbc-d885f07ae422"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"eb15db7f-6682-4c7e-b3d1-1e3296079cc7","elementid":"f4928e0b-1234-41f3-9eb1-d8c1ea599688","modelid":"e97b46d2-c690-441e-8dbc-d885f07ae422"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
